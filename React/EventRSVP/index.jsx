const { useState } = React;

export function EventRSVPForm() {
  return(
    <>
      <h1>Event RSVP Form</h1>
      <div>
      <form>
        <label 
          htmlFor="name" 
          className="element">
            Name:
        </label>
        <input 
          type="text" 
          placeholder="Your Name"
          className="element-input"
          // onChange={handleInputName}
        />
        <label 
          htmlFor="Email"
          className="element"
        >
            Email:
        </label>
        <input 
          type="email"
          placeholder="Your Email"
          className="element-input" 
          // onChange={handleInputName}            
        />
        <label 
          htmlFor="Attendees" 
          className="element"
        >
          Number of Attendees:
        </label>
        <input 
          type="number" 
          placeholder="Number of Attendees"
          className="element-input"
        />
        <label 
          htmlFor="Dietary Preferences"
          className="element"
        >
          Dietary Preferences (Optional)
        </label>
        <input 
          type="text" 
          placeholder="Dietary Preferences (Optional)"
          className="element-input"
        />
        <label htmlFor="additional-guests"
        >Bringing additional guests?</label>
        <input 
          type="checkbox" 
        />
        <button type="submit" className="element">Submit RSVP</button>
      </form>
      </div>
    </>
  );
}