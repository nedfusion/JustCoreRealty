import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  services?: string[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const supabase = createClient(supabaseUrl, supabaseKey);

    const formData: ContactFormData = await req.json();

    const { error: dbError } = await supabase
      .from("contact_inquiries")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          inquiry_type: "General Inquiry",
          message: formData.message,
          services: formData.services || [],
        },
      ]);

    if (dbError) throw dbError;

    if (resendApiKey) {
      const servicesHtml = formData.services && formData.services.length > 0
        ? `<div class="field">
            <div class="label">Services Interested In:</div>
            <div class="value">
              <ul style="margin: 5px 0; padding-left: 20px;">
                ${formData.services.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
          </div>`
        : '';

      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #C9A24D; color: #000; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${formData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${formData.email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${formData.phone || "Not provided"}</div>
                </div>
                ${servicesHtml}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${formData.message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "JustCore Realty <noreply@justcorerealty.com>",
          to: ["info@justcorerealty.com"],
          subject: `New Inquiry from ${formData.name}`,
          html: emailHtml,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Email sending failed:", await emailResponse.text());
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
