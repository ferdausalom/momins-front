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
        <WorkProcessStepLeftImg
          step-number="1"
          step-title="User Experience"
          step-desc="We define your competition and target audience. Discover what is
          working in your online industry, then design your website accordingly."
        >
          <img
            class="process-part-img"
            src="../../assets/images/home/user-experience.png"
            alt=""
          />
        </WorkProcessStepLeftImg>
        <div class="devider">&nbsp;</div>
        <WorkProcessStepRightImg
          step-number="2"
          step-title="Web Design"
          step-desc=" Color scheme, layout, sitemap, and style. We will bring your
                brand to life with a one of a kind masterpiece, built just for
                you"
        >
          <img
            class="process-part-img"
            src="../../assets/images/home/web-design.png"
            alt=""
          />
        </WorkProcessStepRightImg>
        <div class="devider">&nbsp;</div>
        <WorkProcessStepLeftImg
          step-number="3"
          step-title="Web Development"
          step-desc='We turn your ideas into a reality. &our website is placed on a "development server" where you get to watch the whole process, live.'
        >
          <img
            class="process-part-img"
            src="../../assets/images/home/web-development.png"
            alt=""
          />
        </WorkProcessStepLeftImg>
        <div class="devider">&nbsp;</div>
        <WorkProcessStepRightImg
          step-number="4"
          step-title="Support"
          step-desc="This is where you go live, to the world. Design, marketing, and maintenance; we'll be at your side for the life of your site."
        >
          <img
            class="process-part-img"
            src="../../assets/images/home/support.png"
            alt=""
          />
        </WorkProcessStepRightImg>
      </div>
    </div>
  </div>
</template>

<script setup>
import WorkProcessStepLeftImg from "@/components/workprocess/WorkProcessStepLeftImg.vue";
import WorkProcessStepRightImg from "@/components/workprocess/WorkProcessStepRightImg.vue";
</script>

<style>
.process {
  padding: 0 85px;
}
.devider {
  padding: 30px 0;
}
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
  top: 226px;
  right: 235px;
}
</style>
