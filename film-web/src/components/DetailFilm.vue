<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb__links">
            <a href="./index.html"><i class="fa fa-home"></i> Home</a>
            <a href="./categories.html">Categories</a>
            <span>Romance</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- Anime Section Begin -->
  <section class="anime-details spad">
    <div class="container">
      <div class="anime__details__content">
        <div class="row">
          <div class="col-lg-3">
            <div
              class="anime__details__pic set-bg"
              :style="{ 'background-image': 'url(' + this.item.data.thumb_url + ')' }"
            >
              <div class="comment"><i class="fa fa-comments"></i> 11</div>
              <div class="view"><i class="fa fa-eye"></i> {{this.item.data.view}}</div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="anime__details__text">
              <div class="anime__details__title">
                <h3>{{this.item.data.name}}</h3>
                <span>{{this.item.data.origin_name}}</span>
              </div>
              <div class="anime__details__rating">
                <div class="rating">
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star-half-o"></i></a>
                </div>
                <span>1.029 Votes</span>
              </div>
              <p v-html="this.item.data.content">
              </p>
              <div class="anime__details__widget">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Type:</span> TV Series</li>
                      <li><span>Studios:</span> Lerche</li>
                      <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                      <li><span>Status:</span> Airing</li>
                      <li>
                        <span>Genre:</span> Action, Adventure, Fantasy, Magic
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Scores:</span> 7.31 / 1,515</li>
                      <li><span>Rating:</span> 8.5 / 161 times</li>
                      <li><span>Duration:</span> 24 min/ep</li>
                      <li><span>Quality:</span> HD</li>
                      <li><span>Views:</span> 131,541</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="anime__details__btn">
                <a href="#" class="follow-btn"
                  ><i class="fa fa-heart-o"></i> Follow</a
                >
                <a href="#" class="watch-btn"
                  ><span>Watch Now</span> <i class="fa fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <div class="anime__details__review">
            <div class="section-title">
              <h5>Reviews</h5>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="img/anime/review-1.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Chris Curry - <span>1 Hour ago</span></h6>
                <p>
                  whachikan Just noticed that someone categorized this as
                  belonging to the genre "demons" LOL
                </p>
              </div>
            </div>
          </div>
          <div class="anime__details__form">
            <div class="section-title">
              <h5>Your Comment</h5>
            </div>
            <form action="#">
              <textarea placeholder="Your Comment"></textarea>
              <button type="submit">
                <i class="fa fa-location-arrow"></i> Review
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="anime__details__sidebar">
            <div class="section-title">
              <h5>you might like...</h5>
            </div>
            <div
              class="product__sidebar__view__item set-bg"
              data-setbg="img/sidebar/tv-1.jpg"
            >
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5><a href="#">Boruto: Naruto next generations</a></h5>
            </div>
            <div
              class="product__sidebar__view__item set-bg"
              data-setbg="img/sidebar/tv-2.jpg"
            >
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
            </div>
            <div
              class="product__sidebar__view__item set-bg"
              data-setbg="img/sidebar/tv-3.jpg"
            >
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5>
                <a href="#">Sword art online alicization war of underworld</a>
              </h5>
            </div>
            <div
              class="product__sidebar__view__item set-bg"
              data-setbg="img/sidebar/tv-4.jpg"
            >
              <div class="ep">18 / ?</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div>
              <h5>
                <a href="#">Fate/stay night: Heaven's Feel I. presage flower</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Anime Section End -->

  <!-- Footer Section Begin -->
  <footer class="footer">
    <div class="page-up">
      <a href="#" id="scrollToTopButton"
        ><span class="arrow_carrot-up"></span
      ></a>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer__logo">
            <a href="./index.html"><img src="img/logo.png" alt="" /></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="footer__nav">
            <ul>
              <li class="active"><a href="./index.html">Homepage</a></li>
              <li><a href="./categories.html">Categories</a></li>
              <li><a href="./blog.html">Our Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->

  <!-- Search model Begin -->
  <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <div class="search-close-switch"><i class="icon_close"></i></div>
      <form class="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  <!-- Search model end -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: [],
      errors: [],
    };
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    axios
      .get(`http://localhost:8000/api/detail-film`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkzOTY1NjQ1LCJleHAiOjE2OTM5NjkyNDUsIm5iZiI6MTY5Mzk2NTY0NSwianRpIjoiMnhGdUNWaGNoODNIcURlQSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kboAWRrhhk4LuPkFfNY0_MHJDLoGvmBJnM3_5MJCetk`,
        },
        params: {
          id: this.$route.params.id,
        },
      })
      .then((response) => {
        this.item = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>