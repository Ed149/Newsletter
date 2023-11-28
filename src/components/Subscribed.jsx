import iconSuccess from '/src/assets/icon-success.svg'

export const Subscribed = ({handleSubscribed,email}) => {
  return (
    <div className='wrapper'>
        <div className="card__info card_subscribed">
            <div className="card__info_subscribed">
                <img src={iconSuccess} alt="success" />
                <section className='subscribed'>
                    <h3>Thanks for subscribing!</h3>
                    <p>A confirmation email has been sent to <span className='email'>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
                </section>
            </div>

            <div className="card__info__btn">
                <button className='btn' onClick={handleSubscribed}>Dissmiss message</button>
            </div>
        </div>
    </div>
  )
}
