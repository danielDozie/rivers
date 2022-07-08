import nodemailer from 'nodemailer'


export async function get(event){
    const email = await event.url.searchParams.get('email')
    const name = await event.url.searchParams.get('name')
    const hash = await event.url.searchParams.get('hash')
    const comment = await event.url.searchParams.get('comment')
        
        try {
            let transporter = nodemailer.createTransport({
                host: "pathos.pdhosts.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: "verification@sustainablerivers.org",
                pass: "KXrw3RUJQwop"
                },
            });
            
            // send mail with defined transport object
            await transporter.sendMail({
                from: '"The Sustainable Rivers Initiative 👻" <verification@sustainablerivers.org>', // sender address
                to: email, // recipient address, // list of receivers
                subject: "Verify & publish your comment ✔", // Subject line
                text: `Hi ${name}, Verify your email to have your comment published on the chatroom. Click on the verify link below to verify your email https://sustainablerivers.org/verifymail?hash=${hash}`, // plain text body
                html: `<div style="width: 90%;"><p>Hi ${name}, </p> <p>Verify your email to have your comment published on the chatroom. Click on the verify link below to confirm your email </p><br/>
                <a href="https://sustainablerivers.org/verifymail?hash=${hash}"><button style="background-color: #0E5792; color: #fff; padding: 5px 10px 5px 10px; border: none; cursor: pointer;">Verify & Publish</button></a> <br/>
                <br/>
                <p><span style="font-weight:700;">Comment</span><br/>${comment}</p>
                <hr style="width: 80%; float: left;" /><br/>
                <p>The Sustainable Rivers Initiative Team.</p>
                <p>Copyright &copy; 2022.</p>
                </div>`, // html body
            });
            return {
                status: 200,
                body: {
                    message: 'ok'
                }
            }
        } catch (error) {
            return {
                status: 500,
                body: {
                    message: error.message
                }
            }
        }
}