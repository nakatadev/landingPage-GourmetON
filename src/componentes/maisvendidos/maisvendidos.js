import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './maisvendidos.css';
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';


function MaisVendidos(){
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://nakatadev.github.io/apiFake-GourmetON/pratos.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <section className="sec5__maisVendidos">
            <h2>Pratos mais vendidos</h2>
            <div className="sec5__pratos">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay ]}
                    autoplay={{ 
                        delay: 2000, 
                        disableOnInteraction: false,
                    }}
                    loop = {true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="sec5__slide">
                            <img src={slide.imagem} className="slide__imagem" />
                            <div className="container__slide">
                                <h3>{slide.title}</h3>
                                <h4>{slide.description}</h4>
                                <p>{slide.restaurant}</p>
                                <a href="#">Saiba mais</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default MaisVendidos;
