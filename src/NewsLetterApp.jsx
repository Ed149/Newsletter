import React, { useState } from 'react'
import { Subscription } from './components/Subscription'
import { Subscribed } from './components/Subscribed';

export const NewsLetterApp = () => {
  const [subscribed,setsubscribed] = useState(false);
  const [email,setEmail] = useState('')
  
  const handleSubscribed = (email) =>{
    setsubscribed(!subscribed);
    setEmail(email);
  }

  return (
    <div>
      { 
        subscribed ? 
        (<Subscribed handleSubscribed={handleSubscribed} email={email}/>) 
        : 
        (<Subscription handleSubscribed={handleSubscribed}/>)
      }
    </div>
  )
}
