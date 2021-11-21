import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.less';
import {CommentForm} from "../CommentForm";

interface IPostProps {
  onClose?: ()=> void;
}

export function Post(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() =>{
    function handleClick(event: MouseEvent){
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        props.onClose?.()
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  const node = document.querySelector('#modal_root')
  if(!node) return null
  return ReactDOM.createPortal(
    (
    <div className={styles.modal} ref={ref}>
      <h2> Need to mention, that the new model organisation the best organisation that I saw</h2>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magnam odit qui sunt vero. Aut commodi, cupiditate delectus dignissimos, doloremque eius enim nisi numquam quibusdam rem repellat voluptatum. A dolor ducimus enim ipsum officia repudiandae unde voluptatum? Accusamus asperiores iure modi optio quae, quas voluptatibus! Ad commodi eos exercitationem, explicabo iste molestiae placeat tenetur voluptatibus! Aliquid amet aperiam asperiores beatae consequatur consequuntur cupiditate delectus deserunt dolor doloremque dolores, doloribus eos et eum eveniet fuga illo ipsam ipsum itaque magnam maxime modi molestiae nemo nihil obcaecati officiis quaerat quia quisquam quo quos recusandae rem saepe similique soluta unde, veniam veritatis. A architecto consectetur corporis delectus dignissimos doloribus enim in laboriosam laborum libero maxime nostrum, odio placeat quasi quia quos repellat tempora, ullam vel voluptas! Atque dignissimos hic iure perferendis placeat praesentium quasi quod tempore veniam voluptates. Amet aperiam autem dolorum exercitationem, fuga fugiat laboriosam natus! Accusamus adipisci animi, aperiam architecto commodi delectus dolor doloribus eligendi error, fuga harum labore laboriosam modi mollitia nobis nostrum officiis perferendis quibusdam repellat sapiente tenetur vel, voluptates voluptatibus? Ad aliquid, amet beatae cumque cupiditate debitis dolore dolorem, dolorum eaque eius fugiat fugit iste maiores nulla omnis pariatur repellat reprehenderit sint sunt tempore totam vero voluptatibus! Culpa cumque dolores, doloribus eius fugit laudantium nam neque nihil odio officiis porro quibusdam quo ratione sed, vitae. Amet consequatur error hic ipsam, nobis placeat possimus reiciendis! A architecto at dolor, nesciunt nostrum odit perspiciatis quos velit voluptatibus! Ad aliquid blanditiis culpa fuga incidunt ipsum nam natus, necessitatibus nemo nesciunt officia perferendis placeat repudiandae rerum sint temporibus tenetur veniam vero! Assumenda fuga fugiat ipsam ullam velit. A doloribus excepturi iure numquam quae quasi quidem recusandae? Aut dolor molestias nobis, possimus quam quasi ullam. Ab, aliquid consequatur corporis deserunt dicta doloremque eaque ipsa labore molestiae nostrum porro quae quod reiciendis sunt, totam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, aperiam beatae doloremque dolorum eligendi error magnam, natus nihil nisi quasi quo recusandae repellat similique ut! Accusamus alias asperiores assumenda corporis cum deserunt dicta dolor doloribus ducimus eius, ex, fugiat incidunt iusto labore molestiae odit vel! Accusamus adipisci aliquam animi atque consectetur consequuntur cumque dicta distinctio, ducimus enim error ipsa ipsum minima nam quam reiciendis repellat tempore voluptates, voluptatibus voluptatum? Dolorem excepturi iure laudantium minus, officiis suscipit voluptates? Aliquid amet dignissimos dolorem eum, impedit ipsam maxime minima molestiae nesciunt nostrum perferendis vero. Asperiores blanditiis commodi debitis dicta dolores, esse eveniet explicabo id impedit in iure labore magni minima nam nesciunt nihil non odio omnis praesentium quas quidem quo, rem repellat repudiandae rerum sed tenetur veniam. Ad, alias animi deserunt exercitationem facilis fugiat maiores maxime molestiae odio quaerat temporibus velit. Aut deleniti dolor ea enim error est facilis illo incidunt necessitatibus, odio officiis, rem repudiandae vel veritatis voluptatem. Blanditiis consequuntur cupiditate esse hic illum ipsum, obcaecati officia optio porro quis recusandae tempora totam voluptas. Deserunt expedita officia omnis placeat, praesentium quae quam qui sed sequi vel. A, ad provident! Ad atque dignissimos ea est ipsa officia quaerat quisquam sed suscipit voluptas.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam beatae, commodi culpa cupiditate deserunt dignissimos dolore dolorem eaque facilis ipsa ipsum magnam magni minima molestiae natus obcaecati odit optio praesentium provident quia quos rerum sint sit tempore velit veritatis. Commodi culpa esse maiores officia repudiandae sit sunt ut voluptas! Accusamus ad consequatur consequuntur deleniti dignissimos eos, est ex expedita explicabo inventore ipsam laboriosam natus necessitatibus odit, perspiciatis quas quia recusandae, repudiandae sapiente similique vero voluptas voluptate voluptatem. Accusantium autem consequuntur culpa dicta eos esse eum, expedita fugiat iste laboriosam maiores minima minus nesciunt officiis perspiciatis placeat quam quia quidem rem voluptate. Ab numquam, quae. Aspernatur cumque delectus dicta doloremque, dolorum eligendi eveniet exercitationem id ipsam iusto laudantium necessitatibus obcaecati officiis pariatur praesentium provident quasi quidem quis, repudiandae sit soluta sunt ut, voluptate! Accusantium adipisci alias aliquam amet architecto blanditiis culpa cum cupiditate dolore dolorem ea, earum error est ex, facilis hic illum iste labore maxime perspiciatis quas quidem rem repudiandae soluta tempora ullam voluptates! Ab alias aspernatur dolor doloremque eligendi esse eum excepturi facere harum, impedit in, iusto laboriosam laborum laudantium minima numquam quaerat quas qui reiciendis rem repudiandae rerum sequi soluta sunt, tenetur totam vero voluptas. Doloremque?</p>
      </div>
      <CommentForm />
    </div>
  ), node
  );
}
