<template>
  <div class="work-process">
    <div class="container">
      <h3 class="text-center work-process-title">Work Process</h3>
      <div class="process position-relative">
        <img
          src="../../assets/images/home/process.png"
          alt=""
          class="process-img mx-auto position-absolute"
        />
        <div class="row">
          <div class="col-md-7">
            <img
              class="process-part-img"
              src="../../assets/images/home/user-experience.png"
              alt=""
            />
          </div>
          <div class="col-md-5">
            <div class="process-text-part">
              <p
                class="number bg-light text-center d-flex align-items-center justify-content-center"
              >
                <span>01</span>
              </p>
              <h4>User Experience</h4>
              <p>
                We define your competition and target audience. Discover what is
                working in your online industry, then design your website
                accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.work-process-title {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  margin: 0 0 110px 0;
}
.process-img {
  z-index: -1;
  top: 198px;
}
.process-part-img {
  border-radius: 100%;
  border: 12px solid rgb(255, 255, 255);
  outline: 10px solid #2bc2d7;
}
.process-text-part p {
  font-size: 18px;
  line-height: 28px;
  color: #666666;
}
.process-text-part .number {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 74px;
  width: 138px;
  height: 138px;
  border-radius: 100%;
  border: 7px solid rgb(255, 255, 255);
  outline: 5px solid #2bc2d7;
  color: #666666;
}
.process-text-part .number span {
  margin: -18px 0 0 0;
}
.process-text-part h4 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 52px;
  color: #000000;
  margin: 12px 0;
}
</style>
