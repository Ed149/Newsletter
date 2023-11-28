import { useState } from 'react';
import iconList from '/src/assets/icon-list.svg';

const exp = /\w+@([\w{2,8}]+\.)+\w{3,5}/g;

export const Subscription = ({ handleSubscribed }) => {

    const [email, setEmail] = useState("");
    const [isError,setIsError] = useState(false);


    const handleInputChange = (e) => {
        setIsError(false);
        setEmail(e.target.value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(email == '' || email.match(exp) == null) {
            setIsError(true);
            return;
        }
        handleSubscribed(email);
    }


    return (
        <div className="wrapper">
            <div className="card">
                <div className="card__image"></div>
                <section className="card__info">
                    <h3>Stay updated!</h3>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className='card__info_list'>
                        <li className='list__item'>
                            <img src={iconList} alt="" />
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li className='list__item'>
                            <img src={iconList} alt="" />
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li className='list__item'>
                            <img src={iconList} alt="" />
                            <p>And much more! </p>
                        </li>
                    </ul>
                    <form className="" action="" onSubmit={handleOnSubmit}>
                        <div className="form__group">
                            <div className="form__group__label">
                                <label htmlFor="">Email address</label>
                                <span style={{display:isError ? "block" : "none"}}>Valid email required</span>
                            </div>
                            <input type="text"  className={isError ? "error" : ""} placeholder='email@company.com' onChange={handleInputChange} />
                        </div>
                        <button className='btn'> Subscribe to monthly newsletter </button>
                    </form>
                </section>


            </div>
        </div>
    )
}
