import React, { useEffect } from 'react';
import './Instructions.css';
import { food_list, instruction } from '../../assets/assets';

const Instructions = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
      const slides = slider.children;
      const totalSlides = slides.length;
      let slideIndex = 0;

      const autoSlide = () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        slider.scrollTo({
          left: slides[slideIndex].offsetLeft,
          behavior: 'smooth'
        });
      };

      const slideInterval = setInterval(autoSlide, 5000);

      // Clean up interval on component unmount
      return () => clearInterval(slideInterval);
    });
  }, []);

  useEffect(() => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
      const preventHorizontalScroll = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          slider.scrollLeft += e.deltaY;
        }
      };

      slider.addEventListener('wheel', preventHorizontalScroll);

      // Clean up event listener on component unmount
      return () => {
        slider.removeEventListener('wheel', preventHorizontalScroll);
      };
    });
  }, []);

  return (
    <div className='Instructions' id='instructions'>
      <h2>Instructions to Keep Your Plant Safe...</h2>


      <div className="card">
        <div className="slider-wrapper">

          <div className="slider">
            <img id='slide-1' src={instruction.water1} alt="Watering Instruction 1" />
            <img id='slide-2' src={instruction.water2} alt="Watering Instruction 2" />
            <img id='slide-3' src={instruction.water3} alt="Watering Instruction 3" />
            <img id='slide-4' src={instruction.water4} alt="Watering Instruction 4" />
          </div>

          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
          </div>
        </div>

        <div className="instructions">
          <h3>Watering</h3>
          <ul>
            <li>Water deeply until water runs out the drainage holes.</li>
            <li>Don't water on a schedule - check the soil moisture.</li>
            <li>Stick your finger in the soil - water when it feels dry to the touch.</li>
            <li>Use a moisture meter for extra guidance (optional).</li>
          </ul>
        </div>
      </div>

      <div className="card">
        

        <div className="instructions">
          <h3>Changing Soil</h3>
          <ul>
            <li>Repot every 2-3 years (deciduous) or 4-5 years (evergreen).</li>
            <li>Do this when roots fill the pot or the soil breaks down.</li>
            <li>Use a well-draining bonsai mix (not regular potting soil).</li>
            <li>Prune roots slightly during repotting if needed.</li>
          </ul>
        </div>
        <div className="slider-wrapper">

          <div className="slider">
            <img id='slide-1' src={instruction.soil1} alt="Watering Instruction 1" />
            <img id='slide-2' src={instruction.soil2} alt="Watering Instruction 2" />
            <img id='slide-3' src={instruction.soil3} alt="Watering Instruction 3" />
            <img id='slide-4' src={instruction.soil4} alt="Watering Instruction 4" />
          </div>
          
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="slider-wrapper">

          <div className="slider">
            <img id='slide-1' src={instruction.water1} alt="Watering Instruction 1" />
            <img id='slide-2' src={instruction.water2} alt="Watering Instruction 2" />
            <img id='slide-3' src={instruction.water3} alt="Watering Instruction 3" />
            <img id='slide-4' src={instruction.water4} alt="Watering Instruction 4" />
          </div>
          
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
          </div>
        </div>

        <div className="instructions">
          <h3>Trimming</h3>
          <ul>
            <li>Trim to maintain desired shape and size.</li>
            <li>Pinch new growth to encourage branching.</li>
            <li>Use sharp bonsai shears for clean cuts.</li>
            <li>Trim after flowering or during dormancy (depending on species).</li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        

        <div className="instructions">
        <h2>Bonsai History: A Quick Look</h2>
  <p><strong>Origin:</strong></p>
  <ul>
    <li>Began in China thousands of years ago (maybe 3,000!).</li>
    <li>Called penjing - miniature landscapes in trays.</li>
  </ul>
  <p><strong>Japan Takes Over:</strong></p>
  <ul>
    <li>Arrived in Japan around 800 AD.</li>
    <li>Japanese preferred shallower pots, focusing on the tree.</li>
    <li>Became bonsai (meaning "tree in tray").</li>
  </ul>
  <p><strong>Early Fans:</strong></p>
  <ul>
    <li>Only for the rich and noble at first.</li>
    <li>Multiple bonsai collections were common.</li>
  </ul>
  <p><strong>Spread and Change:</strong></p>
  <ul>
    <li>Over time, bonsai became more accessible.</li>
    <li>Focus shifted to the tree itself, not decorations.</li>
    <li>Eventually reached the West in the early 20th century.</li>
  </ul>

        </div>
        <div className="slider-wrapper">

          <div className="slider">
            <img id='slide-1' src={instruction.real1} alt="Watering Instruction 1" />
            <img id='slide-2' src={instruction.real2} alt="Watering Instruction 2" />
            <img id='slide-3' src={instruction.real3} alt="Watering Instruction 3" />
            <img id='slide-4' src={instruction.real4} alt="Watering Instruction 4" />
          </div>
          
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
          </div>
        </div>
      </div>     
     

    <div className="selecting-bon">
      <div className="potrait-img">
    <h1>The Creative World of Bonsai</h1>
  <p>Bonsai is a captivating art form that allows for immense creativity. Let's explore five ways bonsai unleashes creativity in the real world:</p>

  <h2>1. Style Selection</h2>
  <p>The first step towards a creative bonsai is choosing a style. Each style offers a unique aesthetic, significantly impacting the final look.</p>
  <ul>
    <li><b>Formal Upright:</b> Imagine a dignified tree reaching for the sky.</li>
    <img src='https://i.redd.it/n3glybsh4any.jpg'/>
    <li><b>Informal Upright:</b> A more relaxed version of the formal style, with a natural, flowing trunkline. </li>
    <img src='https://i8.fnp.com/assets/images/custom/blog/Bonsai2.jpg'/>
    <li><b>Slanting:</b> This style portrays a tree enduring strong winds, creating a dynamic composition.</li>
    <img src='https://plantly.io/wp-content/uploads/2020/10/bonsai-shakan.jpg'/>
    <li><b>Cascade:</b> Imagine a waterfall of foliage cascading down a slope. A truly dramatic style! </li>
    <img src='https://gardenerspath.com/wp-content/uploads/2021/12/Cascade-Bonsai-on-a-Gray-Background.jpg'/>
    <li><b>Forest:</b> Recreate a miniature woodland with multiple trees in a single pot.</li>
    <img className="selecting-sm"src='https://b934934.smushcdn.com/934934/wp-content/uploads/2022/09/Bonsai-Forests-1140x694.jpg?lossy=1&strip=0&webp=1' />
  </ul>
  </div>

  <div className="landscape-img">
  <h2>2. Tree Selection</h2>
  <p>Not every tree can be a bonsai, but there are many suitable options! Popular choices include juniper, ficus, elm, and pines. The chosen tree species influences the achievable styles.</p>
    <img src='https://i.pinimg.com/736x/98/d0/c4/98d0c40666b19badb043ef67243fe880.jpg'/>
  <h2>3. Pot Selection</h2>
  <p>The pot is an integral part of the bonsai presentation, complementing the tree and style. Explore the vast selection of bonsai pots available in various materials, shapes, and sizes.</p>
  <img src='https://i.pinimg.com/736x/eb/d1/12/ebd11298491d9cd7b52145b37a475b18.jpg'/>
  <h2>4. Miniature Landscapes</h2>
  <p>Incorporate miniature landscapes into your bonsai by adding rocks, moss, and other miniature plants. This adds depth and intrigue to your creation. </p>
  <img src='https://i.pinimg.com/736x/3e/19/c7/3e19c76ae39a690ddca035dd78d95985.jpg'/>
  <h2>5. Deadwood Techniques</h2>
  <p>Deadwood techniques, like jin (dead wood) and shari (exposed wood), add character and age to your bonsai. Mastering these techniques elevates your bonsai to a whole new level! </p>
  <img src='https://i.pinimg.com/736x/5d/42/a1/5d42a1bd4edab67d02687128df9da2f5.jpg'/>
  <p>With these creative approaches, you can transform a regular tree into a captivating living sculpture. Explore the world of bonsai and create your own miniature masterpiece!</p>
  </div>
    </div>

    </div>
  );
};

export default Instructions;
