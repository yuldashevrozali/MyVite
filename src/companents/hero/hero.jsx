import './hero.css'
function Main(){
    return (
        <div className="hero">
            <div className="about">
                    <h1 id='h1'>Post Your Requirements</h1>
                    <p id='p'>Please fill the form below to receive a quote for workspace. Please add all the details required.</p>
            </div>

            <form className='form1'>
                <h3>Contact details</h3>
                <p>Please fill your information so we can get in touch with you.</p>
                <div className="hr"></div>
                <label htmlFor="name"><p>Name</p></label><br />
                <input type="text" placeholder='Your Name' id="name" /><br />

                <label htmlFor="nomer"><p>Phone Number</p></label><br />
                <input type="number" placeholder='(123) 456 - 7890' id="nomer" /><br />

                <label htmlFor="email"><p>Email</p></label><br />
                <input type="email" placeholder='Your Mail ID' id="email" /><br />

                <label htmlFor="vaqt"><p>Date</p></label><br />
                <input type="text" placeholder=' dd - mm - yyyy' id="vaqt" /><br />
            </form>
            <input type="button" id='btn' value="Next" />
        </div>
    )
}

export default Main