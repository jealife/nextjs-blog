import React from 'react'
import './card.css'
import Image from 'next/image';


export default function Card({num}) {
    let src='https://unsplash.it/'+num;
    let src2="https://i.pravatar.cc/40?Image="+num;
    return (
        <div className="card">
            <div className="card__header">
                <img src={src} alt="card__image" className="card__image Image" width="600"  />
            </div>
            <div className="card__body">
                <span className="tag tag-blue">Technology</span>
                <h4>What&aposs new in 2022 Tech</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
            </div>
            <div className="card__footer">
                <div className="user">
                    <img src={src2} alt="user__image" className="user__image Image"   />
                    <div className="user__info">
                        <h5>Jane Doe</h5>
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>

    )
}
{/* <div className="card">
                <div className="card__header">
                    <Image src="https://source.unsplash.com/600x400/?food" alt="card__image" className="card__image Image" width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-brown">Food</span>
                    <h4>Delicious Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <Image src="https://i.pravatar.cc/40?Image=2" alt="user__image" className="user__image Image" />
                        <div className="user__info">
                            <h5>Jony Doe</h5>
                            <small>Yesterday</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    <Image src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" className="card__image Image" width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-red">Automobile</span>
                    <h4>Race to your heart content</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <Image src="https://i.pravatar.cc/40?Image=3" alt="user__image" className="user__image Image" />
                        <div className="user__info">
                            <h5>John Doe</h5>
                            <small>2d ago</small>
                        </div>
                    </div>
                </div>
</div> */}