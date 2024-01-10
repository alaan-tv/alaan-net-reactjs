import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Advertise from './Advertise'
import DocumentMeta from 'react-document-meta';
const Terms = () => {
    const meta = {
        title: 'Terms & Conditions',
        description: 'I am a description, and I can create multiple tags',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      }
  return (
    <div>
         <DocumentMeta {...meta} />
    <div className='home-container'>
        <Header />
        <div className='terms-section'>
        <h1 className='title'> 
        Terms and Conditions
 </h1>
 <p> These Terms and Conditions (“Terms”) govern the use of the services provided by Alaan Studio (“Alaan,” “we,” “our,” or “us”) in relation to the “Alaan Checkup” and the “Video Resume and Photoshoot” services. By making a reservation for our services, you (“you,” “your,” or “customer”) agree to abide by these Terms.</p>
 < div className='terms'>
    <div className='term'>
    <h4>
 1.Reservation and Confirmation
 </h4>
<p>1.1Upon submitting a reservation request, Alaan will review your request and provide confirmation via email or other means of communication. The reservation will be considered confirmed only upon receipt of our confirmation.</p>

<p>1.2 We reserve the right to decline any reservation request at our discretion, and we are not liable for any inconvenience caused due to the denial of a reservation.</p>
 
    </div>
 
    <div className='term'>

<h4>
2. Services Provided
 </h4>
<p>
2.1 Alaan Checkup: This service involves a comprehensive analysis of your digital footprint, including reviewing your job portal resumes, social media presence, and conducting an online reputation search to simulate recruiters’ behavior.

    </p>

<p>
2.2 Video Resume and Photoshoot: This service entails preparing, filming, and editing a video resume, as well as a professional photoshoot. The goal is to produce a high-quality video resume and photographs that enhance your presentation to potential employers.

    </p>
    </div>

    <div className='term'>

<h4>
3. Digital Footprint Review
 </h4>
<p>
3.1 Alaan will meticulously assess your digital presence for factual inaccuracies, inappropriate content, and any elements that may adversely affect your professional credibility.


    </p>

<p>
3.2 After the review, Alaan will provide written advice detailing the issues identified and recommending steps to address them.


    </p>
    </div>
    <div className='term'>

<h4>
4. Expert Consultation

 </h4>
<p>
4.1 As part of the Alaan Checkup, you will receive a 30-minute confidential one-on-one video session with an expert. During this session, actionable insights will be shared based on the findings of your digital footprint review.



    </p>


    </div>
    <div className='term'>

<h4>
5. Customer Responsibilities

 </h4>
<p>
5.1 You are responsible for providing accurate information during the reservation process.



    </p>

<p>
5.2 You agree to follow our guidelines during the video resume filming and photoshoot session to ensure a successful outcome.



    </p>
    <p>
    5.3 You are solely responsible for implementing the recommendations provided by Alaan based on the digital footprint review.


    </p>
    </div>
    <div className='term'>

<h4>
6. Confidentiality and Privacy

 </h4>
<p>
6.1 Alaan will treat all personal and sensitive information provided by you as confidential. However, we cannot guarantee the security of data transmission over the internet.
    </p>

    </div>
    <div className='term'>

<h4>
7. Payment

 </h4>
<p>
7.1 Payment for our services will be as per the rates mentioned during the reservation process. All payments are non-refundable.



    </p>

    </div>
    <div className='term'>

<h4>
8. Cancellation and Rescheduling


 </h4>
<p>
8.1 Cancellation or rescheduling of a reservation must be made within the time frame specified during the reservation process.




    </p>

    </div>
    <div className='term'>

<h4>
9. Liability



 </h4>
<p>
9.1 Alaan shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services.





    </p>

    </div>
    <div className='term'>

<h4>
10. Amendments



 </h4>
<p>
10.1 Alaan reserves the right to amend these Terms at any time. Updated Terms will be effective upon posting on our website.





    </p>

    </div>

    <p>
    By making a reservation with Alaan Studio, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions. If you have any questions or concerns, please contact us at <a href="mailto:info@alaan.tv" >
          <span className='info-text'>info@alaan.tv</span>
      
        </a>
    </p>
 </div>
 
        </div>
        <Advertise />
    </div>
    <Footer />
    </div>
  )
}

export default Terms