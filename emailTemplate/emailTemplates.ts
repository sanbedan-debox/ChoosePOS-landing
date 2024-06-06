export interface WaitlistEmailData {
  name: string;
  email: string;
  website?: string;
  phoneNumber: string;
}

export function generateWaitlistEmail(data: WaitlistEmailData): string {
  const { name, email, website, phoneNumber } = data;

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
  
    <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
    </head>
    <body style="background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Ubuntu,sans-serif">
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;background-color:#ffffff;margin:0 auto;padding:20px 0 48px;margin-bottom:64px">
        <tbody>
          <tr style="width:100%">
            <td>
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:0 48px">
                <tbody>
                  <tr>
                    <td>
                      <img alt="Company Logo" height="21" src="https://choose-pos-landing.vercel.app/CB.png" style="display:block;outline:none;border:none;text-decoration:none" width="49" />
                      <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                      <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Hi ${name},</p>
                      <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Thank you for joining the waitlist for our upcoming POS product! We're excited to have you on board.</p>
                      <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">One of our team members will contact you shortly with more details. If you need any assistance in the meantime, please don't hesitate to reach out.</p>
                      <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                      <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Here are the details you provided:</p>
                      <ul style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;padding-left: 20px;">
                        <li><strong>Email:</strong> ${email}</li>
                        <li><strong>Website:</strong> ${website || "N/A"}</li>
                        <li><strong>Phone Number:</strong> ${phoneNumber}</li>
                      </ul>
                      <a href="https://support.stripe.com/" style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:#162CF1;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-align:center;width:100%;padding:10px 10px 10px 10px" target="_blank">Get Help</a>
                      <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                      <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">We're here to assist you at any step along the way. You can find answers to most questions and get in touch with us on our <a href="https://support.stripe.com/" style="color:#556cd6;text-decoration:none" target="_blank">support site</a>.</p>
                      <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">— CHOOSE Team</p>
                      <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                      <p style="font-size:12px;line-height:16px;margin:16px 0;color:#8898aa">CHOOSE, 1014, Lodha Supremus - Tower B, Lodha Business District 2, Kolshet Rd, Thane, Maharashtra 400607.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  
  </html>
  `;
}
