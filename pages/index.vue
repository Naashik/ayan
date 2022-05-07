<template>

 <div role="main" class="main">
 
    <!-- Progress scroll totop -->
    <div class="progress-wrap cursor-pointer">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Logo -->
            <div class="logo-wrapper navbar-brand valign">
                <a href="#">
                    <div class="logo">
                        <img src="img/logo.png" class="logo-img" alt="">
                    </div>
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="icon-bar"><i class="ti-line-double"></i></span> </button>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    
                    <li class="nav-item dropdown "> <span class="nav-link active">Home<i class="ti-angle-down"></i></span>
                        <ul class="dropdown-menu last">
                            <li class="dropdown-item"><a href="index.html">Home Layout 1</a></li>
                            <li class="dropdown-item"><a href="index2.html">Home Layout 2</a></li>
                            <li class="dropdown-item"><a href="index3.html">Home Layout 3</a></li>
                            <li class="dropdown-item"><a href="index4.html">Home Layout 4</a></li>
                            <li class="dropdown-item active"><a href="index5.html">Home Layout 5</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="about.html">Stay</a></li>
                    <li class="nav-item dropdown"><span class="nav-link ">Facilities<i class="ti-angle-down"/></span>
                        <ul class="dropdown-menu last">
                            <li class="dropdown-item"><a href="rooms.html">Rooms 1</a></li>
                            <li class="dropdown-item"><a href="rooms2.html">Rooms 2</a></li>
                            <li class="dropdown-item"><a href="rooms3.html">Rooms 3</a></li>
                            <li class="dropdown-item"><a href="room-details.html">Room Details</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="restaurant.html"> Dining</a></li>
                    <li class="nav-item"><a class="nav-link" href="spa-wellness.html">Excursions</a></li>
                    <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
                    
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                </ul>
                
            </div>
        </div>
    </nav>

<!-- Header Video -->
    <header class="header">
        <div class="video-fullscreen-wrap">
            <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. -->
            <div class="video-fullscreen-video" >
                <video playsinline="" autoplay="" loop="" muted="">
                    <source src="img/AYANA SEA - Boutique Resort.mp4" type="video/mp4" autoplay="" loop="" muted="">
                    <source src="img/AYANA SEA - Boutique Resort.webm" type="video/webm" autoplay="" loop="" muted="">
                </video>
            </div>
           
        </div>
    
        
        <!-- arrow down -->
        <div class="arrow bounce text-center">
            <a href="#" data-scroll-nav="1" class=""> <i class="ti-arrow-down"></i> </a>
        </div>
    </header>
    
    <!-- About -->
    <section class="about section-padding" data-scroll-index="1">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <span>
                        <i class="star-rating"></i>
                        <i class="star-rating"></i>
                        <i class="star-rating"></i>
                        <i class="star-rating"></i>
                        <i class="star-rating"></i>
                    </span>
        
                    <div class="section-title">Ayana Sea</div>
                    <p>Ayana Sea, is an exclusive boutique resort overlooking the Indian ocean and located in the charming fishing village of Wadduwa in the southwest coast of Sri Lanka, which is 33 kilometers from the city of Colombo. Ayana Sea brings together the best traits of a villa, providing privacy and personalized services, and the best traits of a hotel, providing facilities and space to deliver an experience like no other.</p>
                    <p>Secluded in 2 acres of carefully manicured lawns with coconut trees, expansive pools and koi fishponds, the Ocean Secrets Restaurant and the SALT bar with spacious and well equipped private units of two storied villas with en suite pools and terraces for a tranquil, pampered and an unforgettable experience.</p>
                    
                </div>
                <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                    <img src="img/overview-2.jfif" alt="" class="mt-90 mb-30">
                </div>
                <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                    <img src="img/overview-3.jfif" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- Rooms -->
    <section class="rooms1 section-padding bg-cream" data-scroll-index="1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                     <div class="section-subtitle"><span>Personalized indulgence.</span></div>
                    <div class="section-title">Ayana Facilities</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="img/salt.jpg" alt=""> </div> 
                        <div class="con">
                            <h5><a href="room-details.html">Salt Bar</a> </h5>
                            <div class="line"></div>
                            <div class="row facilities">
                                <div class="col col-md-7">
                                    <ul>
                                        <li><i class="flaticon-bed"></i></li>
                                        <li><i class="flaticon-bath"></i></li>
                                        <li><i class="flaticon-breakfast"></i></li>
                                        <li><i class="flaticon-towel"></i></li>
                                    </ul>
                                </div>
                                <div class="col col-md-5 text-right">
                                    <div class="permalink"><a href="room-details.html">Details <i class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="img/restaurant.jpg" alt=""> </div> 
                        <div class="con">
                            
                            <h5><a href="room-details.html">Ocean Secrets Restaurant</a></h5>
                            <div class="line"></div>
                            <div class="row facilities">
                                <div class="col col-md-7">
                                    <ul>
                                        <li><i class="flaticon-bed"></i></li>
                                        <li><i class="flaticon-bath"></i></li>
                                        <li><i class="flaticon-breakfast"></i></li>
                                        <li><i class="flaticon-towel"></i></li>
                                    </ul>
                                </div>
                                <div class="col col-md-5 text-right">
                                    <div class="permalink"><a href="room-details.html">Details <i class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="img/spa.jpg" alt=""> </div>
                        <div class="con">
                         
                            <h5><a href="room-details.html">Ayurvedic Spa</a></h5>
                            <div class="line"></div>
                            <div class="row facilities">
                                <div class="col col-md-7">
                                    <ul>
                                        <li><i class="flaticon-bed"></i></li>
                                        <li><i class="flaticon-bath"></i></li>
                                        <li><i class="flaticon-breakfast"></i></li>
                                        <li><i class="flaticon-towel"></i></li>
                                    </ul>
                                </div>
                                <div class="col col-md-5 text-right">
                                    <div class="permalink"><a href="room-details.html">Details <i class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="img/pool.jpg" alt=""> </div> 
                        <div class="con">

                            <h5><a href="room-details.html">Swimming Pool</a></h5>
                            <div class="line"></div>
                            <div class="row facilities">
                                <div class="col col-md-7">
                                    <ul>
                                        <li><i class="flaticon-bed"></i></li>
                                        <li><i class="flaticon-bath"></i></li>
                                        <li><i class="flaticon-breakfast"></i></li>
                                        <li><i class="flaticon-towel"></i></li>
                                    </ul>
                                </div>
                                <div class="col col-md-5 text-right">
                                    <div class="permalink"><a href="room-details.html">Details <i class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <!-- Pricing -->
    <section class="pricing section-padding bg-black">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-subtitle"><span>Privacy & Space</span></div>
                    <div class="section-title"><span>Ayana Accomodation</span></div>
                  
                    <div class="reservations mb-30">
                        <div class="icon"><span class="flaticon-call"></span></div>
                        <div class="text">
                            <p class="color-2">For information</p> <a href="tel:+94771131287 , +94382282885 , +94382282886 , +94767025396">+94771131287 , +94382282885 , +94382282886 , +94767025396</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="owl-carousel owl-theme">
                        <div class="pricing-card">
                            <img src="img/premier.jpg" alt="">
                            <div class="desc">
                                <div class="name">Premier<br>Ocean View Villa</div>
                                <p class="new">[ 1 TWIN BED & 1 KING BED | 2 TWIN BEDS ] [ 32 M2 LIVING AREA ]</p>
                        
                                <p>Premier Ocean Villa comes with a spacious living area of 32 m², plunge pool ( jacuzzi ) and spa bath. Its comes with two configuration offerings. One with 1 twin bed and 1 king size bed and the other with 2 twin beds.</p>
                            </div>
                        </div>
                        <div class="pricing-card">
                            <img src="img/pool villa.jpg" alt="">
                            <div class="desc">
                                <div class="name">Premier<br>Pool Villa</div>
                               <p class="new">[ 1 TWIN BED & 1 KING BED | 2 TWIN BEDS ] [ 43 M2 LIVING AREA ]</p>
                                
                                 <p>Premier Pool Villa comes with a spacious living area of 43 m² . It features a plunge pool ( jacuzzi ) and spa bath. Its comes with two configuration offerings. One with 1 twin bed and 1 king size bed and the other with 2 twin beds.</p>
                            </div>
                        </div>
                        <div class="pricing-card">
                            <img src="img/family.jpg" alt="">
                            <div class="desc">
                                <div class="name">Premier<br>Family Villa</div>
                                <p class="new">[ 1 TWIN BED + 1 QUEEN BED ] [ 43 M2 LIVING AREA ]</p>
                                
                                 <p>Premier Family Villa comes with a spacious living area of 43 m² . It features 1 king size bed and 1 queen size bed in the upper floor ( attic ), a balcony, and spa bath.<br><br></p>
                            </div>
                        </div>
                        <div class="pricing-card">
                            <img src="img/delux.jpg" alt="">
                            <div class="desc">
                                <div class="name">Deluxe<br>Villa</div>
                              <p class="new">[ 3 CONFIGURATIONS ] [ 46 M2 LIVING AREA ]</p>
                                
                                 <p>Deluxe Villa comes with a spacious living area of 46 m² . It features a spa bath. Its comes with three configuration offerings. One with 1 twin bed and 1 king size bed + spa bath, the second with 2 twin beds + spa bath and the third with 2 twin beds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   
    <!-- Facilties -->
    <section class="facilties section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-subtitle">Excellence</div>
                    <div class="section-title">Awards &amp; Recognition</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="logosize" >
                                  <img src="img/award/awards.png" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <!-- Testiominals -->
    <section class="testimonials">
        <div class="background bg-img bg-fixed section-padding pb-0" data-background="img/slider/2.jpg" data-overlay-dark="3">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="testimonials-box">
                            <div class="head-box">
                                
                                <h4>Feedback from Our Clients</h4>
                                <div class="line"></div>
                            </div>
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>"The rooms are new, big and modern.The property is just gorgeous, the restaurant has great food.The pool and garden are so beautiful.It is quiet and intimate.Great for families with kids of all ages but also great for couples.It’s a place to relax."</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/uae.png" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Ramona  | UAE</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>We had a fantastic time. The staff was amazingly friendly and the food great. Lovely sunset views! Would definitely recommand the hotel!"</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/ro.png" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Laura  | Romania</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>"I would and maybe will come back to Ayana Sea at all times. Is is a very new and young resort with excellent staff and brilliant food!!! Even though it is not cheap I think it is worth the money! The breakfast is massive and when we had dinner there we were blown away. Even the seemingly simplest dishes were absolute delicious."</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/sg.png" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Alexander  | Singapore</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>"The hotel was beautiful and the staff were so friendly, they couldn’t do enough for you. They loved the children and made a real fuss of them. We look forward to returning again soon."</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/uk.png" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Amy | UK</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>"The food was AMAZING Completely quiet if you need a place to relax Staff very nice and helpful Owner came and asked us all how was our stay, very nice touch"</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/qa.png" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Fatima  | Qatar</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>"Low key paradise!

                                                Beautiful property, amazing food, friendly staff, huge rooms. It was easy to relax here."</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/us.png" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Rebekah  | US</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Services -->
    <section class="services section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                    <div class="img left">
                        <a href="restaurant.html"><img src="img/f1.jpg" alt=""></a>
                    </div>
                </div>
 
                <div class="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6>Experiences</h6>
                            </div>
                            <h4>   Bandaragama <br> Carting Circuit</h4>
                          
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6>Experiences</h6>
                            </div>
                            <h4>Hikkaduwa<br> Diving &amp; Snorkeling</h4>
                           

                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
                    <div class="img">
                        <a href="spa-wellness.html"><img src="img/swim.jpg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                    <div class="img left">
                        <a href="spa-wellness.html"><img src="img/blue wale.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6>Experiences</h6>
                            </div>
                            <h4>  Mirissa <br> Dolphin Watching</h4>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6>Experiences</h6>
                            </div>
                            <h4> Bentota <br> Water Sports</h4>
                        
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
                    <div class="img">
                        <a href="spa-wellness.html"><img src="img/sky.jpg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

   <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-column footer-about">
                            <h3 class="footer-title">About Hotel</h3>
                            <p class="footer-about-text">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>

                            <div class="footer-language"> <i class="lni ti-world"></i>
                                <select onchange="location = this.value;">
                                    <option value="http://duruthemes.com/">English</option>
                                    <option value="http://duruthemes.com/">German</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 offset-md-1">
                        <div class="footer-column footer-explore clearfix">
                            <h3 class="footer-title">Explore</h3>
                            <ul class="footer-explore-list list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="rooms.html">Rooms & Suites</a></li>
                                <li><a href="restaurant.html">Restaurant</a></li>
                                <li><a href="spa-wellness.html">Spa & Wellness</a></li>
                                <li><a href="about.html">About Hotel</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-column footer-contact">
                            <h3 class="footer-title">Contact</h3>
                            <p class="footer-contact-text">150/12, Samanthara Road, Molligoda,<br>Wadduwa, Sri Lanka</p>
                            <div class="footer-contact-info">
                                <p class="footer-contact-phone"><span class="flaticon-call"></span>+94771131287 | +94382282885 | +94382282886 | +94767025396 |</p>
                                <p class="footer-contact-mail">reservation1@ayanavillasandresorts.com</p>
                            </div>
                            <div class="footer-about-social-list">
                                <a href="#"><i class="ti-instagram"></i></a>
                                <a href="#"><i class="ti-twitter"></i></a>
                                <a href="#"><i class="ti-youtube"></i></a>
                                <a href="#"><i class="ti-facebook"></i></a>
                                <a href="#"><i class="ti-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="footer-bottom-inner">
                            <p class="footer-bottom-copy-right">© Copyright 2022 by <a href="#">DuruThemes.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       </footer>

    </div>
 
 
</template>
<style scoped>
.new{
    font-size: 63%;
}
.logosize{
    width: 300%;
    height: 200%
}
.logo-img{
    width:65% ;
    height:65% ;
}
</style>



<script>
export default {
  name: 'IndexPage',
 
     
 
}

</script>
