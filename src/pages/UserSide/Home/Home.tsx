import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const Home = (props: Props) => {
  const slideStyle = {
    transitionDuration: "0ms",
    transform: "translate3d(-657.333px, 0px, 0px)",
  };
  const slideStyle2 = {
    width: "278.667px",
    marginRight: "50px",
  };
  const slideStyle3 = {
    width: "278.667px",
    marginRight: "50px",
  };
  const slideStyle4 = {
    width: "278.667px",
    marginRight: "50px",
  };
  const slideStyle5 = {
    width: "278.667px",
    marginRight: "50px",
  };
  const bb = {
    width: "278.667px",
  };
  return (
    <main className="homepage">
      <section className="main-slide">
        <div className="swiper">
          <div className="swiper-wrapper">
            <a
              href="#"
              className="swiper-slide img auto-scale img-cover"
              title=""
            >
              <img
                className="lazyload"
                src="https://otohathanh.com/upload/images/slide/pc-slide-3.jpg"
                alt=""
                loading="lazy"
              />
            </a>
            <a
              href="#"
              className="swiper-slide img auto-scale img-cover"
              title=""
            >
              <img
                className="lazyload"
                src="https://otohathanh.com/upload/images/slide/pc-slide-4.png"
                alt=""
                loading="lazy"
              />
            </a>
            <a
              href="#"
              className="swiper-slide img auto-scale img-cover"
              title="Khai trương chi nhánh Hoài Đức"
            >
              <img
                className="lazyload"
                src="https://otohathanh.com/upload/images/slide/thong-bao-khai-truong-chi-nhanh-hoai-duc-pc.jpg"
                alt="Khai trương chi nhánh Hoài Đức"
                loading="lazy"
              />
            </a>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
      <section className="index-wellcome pd-lv-1">
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-1 g-3">
            <div className="col">
              <div className="wrap">
                <h2 className="heading-title">
                  <span className="text-uppercase">
                    Chào mừng đến với Hà Thành Garage
                  </span>
                </h2>
                <div className="description">
                  Hà Thành Garage - Hệ thống sửa chữa &amp; chăm sóc xe đạt
                  chuẩn, cung cấp dịch vụ sửa chữa ô tô, bảo dưỡng ô tô, chăm
                  sóc ô tô: khung gầm, động cơ, hộp số, dọn nội thất, phủ
                  ceramic, sơn lazang, sơn phủ gầm, sơn đổi màu, sơn dặm, sơn
                  vá...
                </div>
                <div className="wellcome-slide">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <a
                        href="#"
                        className="swiper-slide img auto-scale img-cover"
                      >
                        <img
                          src=""
                          className=""
                          alt="CEO Nguyễn Ngọc Hà Tham Dự Lễ Kỷ Niệm 20 Năm Thành Lập Trường CĐ Nghề Kỹ Thuật Công Nghệ"
                          loading="lazy"
                        />
                      </a>
                      <a
                        href="#"
                        className="swiper-slide img auto-scale img-cover"
                      >
                        <img
                          src=""
                          className="lazyload"
                          alt="Hà Thành Garage - Tưng Bừng Chào Mừng Ngày Phụ Nữ Việt Nam 20/10"
                          loading="lazy"
                        />
                      </a>
                      <a
                        href="#"
                        className="swiper-slide img auto-scale img-cover"
                      >
                        <img
                          src=""
                          className="lazyload"
                          alt="[CafeBiz] Hai Thương Hiệu Uy Tín Hàng Đầu Trong Lĩnh Vực Dịch Vụ Ô Tô Ký Kết Hợp Tác Chiến Lược"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="gioi-thieu-2.html"
                  title="Giới Thiệu"
                  className="btn btn-main text-uppercase"
                >
                  Xem thêm
                </a>
              </div>
            </div>
            <div className="col">
              <div className="video">
                <iframe
                  width="560"
                  height="315"
                  title="TRỌN GÓI RỬA XE VÀ VỆ SINH NỘI THẤT CHỈ 399K"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  src="https://www.youtube.com/embed/cN-m-DfITmc"
                  className=" lazyload"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h3 className="heading-main text-center text-uppercase bm-lv-1">
          <span>Dịch vụ</span>
          <span>nổi bật</span>
        </h3>
        <div className="swiper slide-service swiper-initialized swiper-horizontal swiper-pointer-events">
          <div className="swiper-wrapper" style={slideStyle}>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index="0"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-bao-duong-sua-chua.aspx"
                  title="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-bao-duong-o-to-uy-tin.jpg"
                      alt="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-1.png"
                    alt="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-bao-duong-sua-chua.aspx"
                    title="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                  >
                    Bảo Dưỡng &amp; Sửa Chữa Ô Tô
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index="1"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-cham-soc-lam-dep.aspx"
                  title="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-don-noi-that-o-to-chuyen-nghiep.jpg"
                      alt="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-2.png"
                    alt="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-cham-soc-lam-dep.aspx"
                    title="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                  >
                    Chăm Sóc &amp; Làm Đẹp Ô Tô
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
              data-swiper-slide-index="2"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-son-phuc-hoi-than-vo.aspx"
                  title="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-son-o-to-uy-tin.jpg"
                      alt="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-3.png"
                    alt="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-son-phuc-hoi-than-vo.aspx"
                    title="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                  >
                    Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index="0"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-bao-duong-sua-chua.aspx"
                  title="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-bao-duong-o-to-uy-tin.jpg"
                      alt="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-1.png"
                    alt="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-bao-duong-sua-chua.aspx"
                    title="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                  >
                    Bảo Dưỡng &amp; Sửa Chữa Ô Tô
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index="1"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-cham-soc-lam-dep.aspx"
                  title="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-don-noi-that-o-to-chuyen-nghiep.jpg"
                      alt="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-2.png"
                    alt="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-cham-soc-lam-dep.aspx"
                    title="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                  >
                    Chăm Sóc &amp; Làm Đẹp Ô Tô
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-prev"
              data-swiper-slide-index="2"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-son-phuc-hoi-than-vo.aspx"
                  title="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-son-o-to-uy-tin.jpg"
                      alt="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-3.png"
                    alt="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-son-phuc-hoi-than-vo.aspx"
                    title="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                  >
                    Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ
                  </a>
                </h4>
              </div>
            </div>

            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index="0"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-bao-duong-sua-chua.aspx"
                  title="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-bao-duong-o-to-uy-tin.jpg"
                      alt="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="icon-dv d-none d-lg-block ls-is-cached lazyloaded"
                    src="template/frontend/otoht/images/layout/index/icon-dv-1.png"
                    alt="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-bao-duong-sua-chua.aspx"
                    title="Bảo Dưỡng &amp; Sửa Chữa Ô Tô"
                  >
                    Bảo Dưỡng &amp; Sửa Chữa Ô Tô
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index="1"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-cham-soc-lam-dep.aspx"
                  title="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://otohathanh.com/upload/images/dich-vu-don-noi-that-o-to-chuyen-nghiep.jpg"
                      alt="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="lazyload icon-dv d-none d-lg-block"
                    src="template/frontend/otoht/images/layout/index/icon-dv-2.png"
                    alt="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-cham-soc-lam-dep.aspx"
                    title="Chăm Sóc &amp; Làm Đẹp Ô Tô"
                  >
                    Chăm Sóc &amp; Làm Đẹp Ô Tô
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="2"
              style={slideStyle2}
            >
              <div className="service-item">
                <a
                  href="https://otohathanh.com/danh-muc-son-phuc-hoi-than-vo.aspx"
                  title="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                  className="img-wrap"
                >
                  <span className="img img-cover auto-scale img-effect zoom-in-1">
                    <img
                      className="lazyload"
                      src="https://otohathanh.com/upload/images/dich-vu-son-o-to-uy-tin.jpg"
                      alt="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="lazyload icon-dv d-none d-lg-block"
                    src="template/frontend/otoht/images/layout/index/icon-dv-3.png"
                    alt="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                    loading="lazy"
                  />
                </a>
                <h4 className="title text-center text-uppercase fw-700">
                  <a
                    href="https://otohathanh.com/danh-muc-son-phuc-hoi-than-vo.aspx"
                    title="Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ"
                  >
                    Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
      <section className="index-review pd-lv-1">
        <div className="container">
          <h2 className="heading-main text-center text-uppercase bm-lv-1">
            <span>Trải nghiệm của</span>
            <span>khách hàng</span>
          </h2>
          <div className="row g-3">
            <div className="col-12">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review-item">
                      <a
                        href="chi-thanh-chu-he-thong-spa-tai-tay-ho.html"
                        title="Chị Thanh - Chủ hệ thống Spa tại Tây Hồ"
                        className="img img-cover auto-scale img-effect zoom-in-1"
                      >
                        <img
                          className="lazyload"
                          src="https://otohathanh.com/upload/images/khach-hang-thanh-thanh.jpg"
                          alt="Chị Thanh - Chủ hệ thống Spa tại Tây Hồ"
                          loading="lazy"
                        />
                      </a>
                      <div className="description text-center">
                        Mình là phụ nữ nên không am hiểu về kỹ thuật, đi bảo
                        dưỡng xe ô tô cũng lo bị chặt chém lắm. Tuy nhiên, khi
                        mang xe đến Hà Thành Garage thì cảm thấy cực kì yên tâm.
                        Các bạn kĩ thuật và tư vấn viên rất nhiệt tình.
                      </div>
                      <h3 className="title fw-700 text-center">
                        <span>Chị Thanh - Chủ hệ thống Spa tại Tây Hồ</span>
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review-item">
                      <a
                        href="bo-chong-quoc-dan-nsut-tran-duc.html"
                        title=""
                        className="img img-cover auto-scale img-effect zoom-in-1"
                      >
                        <img
                          className="lazyload"
                          src="https://otohathanh.com/upload/images/bo-chong-quoc-dan-tran-duc.jpg"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                      <div className="description text-center">
                        Hà Thành Garage là địa chỉ uy tín, luôn giữ chữ tín khi
                        cam kết với khách hàng. Chú rất hài lòng với chất lượng
                        sản phẩm , đảm bảo an toàn và cách các bạn chăm sóc
                        khách hàng rất tận tình, chu đáo.
                      </div>
                      <h3 className="title fw-700 text-center">
                        <span>"Bố chồng quốc dân" - NSƯT Trần Đức</span>
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review-item">
                      <a
                        href="dien-vien-thanh-tu-tu-chao-long-me-man-man-hinh-madzda-pro-tai-ha-thanh-garage.html"
                        title="Diễn Viên Thanh Tú - Tú "
                        className="img img-cover auto-scale img-effect zoom-in-1"
                      >
                        <img
                          className="lazyload"
                          src="https://otohathanh.com/upload/images/dien-vien-thanh-tu-me-man-man-hinh-mazda(1).jpg"
                          alt="Diễn Viên Thanh Tú - Tú "
                          loading="lazy"
                        />
                      </a>
                      <div className="description text-center">
                        Màn hình Mazda Pro là vị cứu tinh tuyệt vời đặc biệt đối
                        với chị em phụ nữ. Nhỏ gọn nhưng nhiều tính năng thông
                        minh. Đặc biệt, mình rất ưng cách phục vụ nhiệt tinh của
                        nhân viên tại Hà Thành Garage. Chắc chắn sắp tới mình sẽ
                        còn quay lại Hà...
                      </div>
                      <h3 className="title fw-700 text-center">
                        <span>Diễn Viên Thanh Tú - Tú "Cháo Lòng"</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="index-system">
        <a href="he-thong-chi-nhanh.html" title="" className="img">
          <img
            className="lazyload"
            src="template/frontend/otoht/images/layout/index/hethong.jpg"
            alt=""
            loading="lazy"
          />
        </a>
      </section>
    </main>
  );
};

export default Home;
