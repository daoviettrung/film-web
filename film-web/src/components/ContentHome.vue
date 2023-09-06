<template>
  <section class="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="trending__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                  <h4>Anime</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn"
                    >View All <span class="arrow_right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                v-for="(item, index) in this.items.data"
                class="col-lg-4 col-md-6 col-sm-6"
              >
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    :style="{
                      'background-image': 'url(' + item.thumb_url + ')',
                    }"
                  >
                    <div class="ep">18 / 18</div>
                    <div class="view">
                      <i class="fa fa-eye"></i> {{ item.view }}
                    </div>
                  </div>
                  <div class="product__item__text">
                    <ul>
                      <li>{{ item.cateName }}</li>
                    </ul>
                    <h5>
                        <router-link :to="'/detail/' + item.id">{{ item.name }}</router-link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="popular__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                  <h4>Phim lẻ</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn"
                    >View All <span class="arrow_right"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="img/popular/popular-1.jpg"
                  >
                    <div class="ep">18 / 18</div>
                    <div class="comment"><i class="fa fa-comments"></i> 11</div>
                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  </div>
                  <div class="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Sen to Chihiro no Kamikakushi</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="recent__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                  <h4>Phim bộ</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn"
                    >View All <span class="arrow_right"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="img/recent/recent-1.jpg"
                  >
                    <div class="ep">18 / 18</div>
                    <div class="comment"><i class="fa fa-comments"></i> 11</div>
                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  </div>
                  <div class="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Great Teacher Onizuka</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="product__sidebar">
            <div class="product__sidebar__view">
              <div class="section-title">
                <h5>Top Views</h5>
              </div>
              <ul class="filter__controls">
                <li class="active" data-filter="*">Day</li>
                <li data-filter=".week">Week</li>
                <li data-filter=".month">Month</li>
                <li data-filter=".years">Years</li>
              </ul>
              <div class="filter__gallery">
                <div
                  class="product__sidebar__view__item set-bg mix day years"
                  data-setbg="img/sidebar/tv-1.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Boruto: Naruto next generations</a></h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix month week"
                  data-setbg="img/sidebar/tv-2.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix week years"
                  data-setbg="img/sidebar/tv-3.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
                    <a href="#"
                      >Sword art online alicization war of underworld</a
                    >
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix years month"
                  data-setbg="img/sidebar/tv-4.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
                    <a href="#"
                      >Fate/stay night: Heaven's Feel I. presage flower</a
                    >
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix day"
                  data-setbg="img/sidebar/tv-5.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      errors: [],
    };
  },

  // lấy dữ liệu khi component được tạo thành công
  mounted() {
    axios
      .get(`http://localhost:8000/api`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkzOTY1NjQ1LCJleHAiOjE2OTM5NjkyNDUsIm5iZiI6MTY5Mzk2NTY0NSwianRpIjoiMnhGdUNWaGNoODNIcURlQSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kboAWRrhhk4LuPkFfNY0_MHJDLoGvmBJnM3_5MJCetk`,
        },
      })
      .then((response) => {
        this.items = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>