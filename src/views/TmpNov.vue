<template>
  <div id="app">
    <div class="cover">
      <h1 style="color: whitesmoke; margin-bottom: 80px">
        富士康大学NOV<br />集团人才发展与学情指数
      </h1>

      <h4 style="color: whitesmoke">
        穷理非一端，所得非一处，或在读书上得之，或在讲论上得之，或在思虑上得之，或在行事上得之。读书得之虽多，讲论得之尤速，思虑得之最深，行事得之最实。-----《明儒学案》
        <br /><br />NO.001 2021.10
      </h4>
    </div>

    <div class="container">
      <!-- <div class="cover" style="width:100%; height:500px; background-image: url('https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80');"></div> -->
      <!-- <img src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt=""> -->

      <h2 style="text-align: center; margin-top: 50px">目錄</h2>
      <div class="outline">
        <a
          class="list-group-item list-group-item-action"
          href="#reporter-oct"
          @click="clickSilder"
          >一、行业信息
        </a>
        <!-- <button type="button" @click="clickSilderVer2">testAnkor</button> -->
        <a class="list-group-item list-group-item-action" href="#reporter-oct"
          >二、学情指数
        </a>
        <a class="list-group-item list-group-item-action" href="#reporter-oct"
          >三、人才发展
        </a>
        <a class="list-group-item list-group-item-action" href="#reporter-oct"
          >四、新书推荐
        </a>
      </div>

      <div class="paragraph pb-3 mt-5 mb-5">
        <h3 class="title pt-3 pb-3">一、行业信息</h3>
        <p class="content">
          Coursera
          2021年行业技能报告引用Microsoft在2020年调研报告资料,全球数位工作需求将从2020年的4千1百万急速增加到2025年的1.9亿,换句话说预计到2025年全球将有1.49亿个新的数字工作,其中：(1)软件开发(9千8百万)；(2)云和数据相关(2千3百万)；(3)数据分析,机器学习和人工智能(2千万)；(4)
          网路安全(6百万)；(5)隐私和信任(1百万)。微软也将此预测公布在其Power
          BI网站上,供有兴趣的人进一步了解各个国家,行业和领域的新数字
          <br /><br />工作需求，例如到2025年,中国电子制造业将新增788,505个软件开发人才需求,234,839个有关云和数据人才需求,76,393个软件数据分析、机器学习和AI人才需求。Coursera的报告恰恰也反应此趋势,建议企业提前布局,强化在急需技能人才的养成。报告总结以下7个重点，如图1。
          <br /><br />
          其中第5点,更是首度分析公司投资在急需技能的程度和公司股价的相关性,诚如,2021年9月号哈佛商业评论封面故事,超前部署新人才库,掌握先机,创造商机。
        </p>

        <div class="row d-flex justify-content-center">
          <div class="col-md-5 mb-3">
            <img
              data-aos="fade-right"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-1-1.png"
              alt=""
              srcset=""
            />
            <span>▲图1</span>
          </div>
          <div class="col-md-5">
            <img
              data-aos="fade-left"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-1-2.png"
              alt=""
              srcset=""
            />
            <span>投资在学习和其公司股票表现成正相关</span>
          </div>
        </div>
      </div>

      <div class="paragraph pb-3 mt-5 mb-5">
        <h3 class="title pt-3 pb-3">一、行业信息</h3>
        <p class="content">
          Coursera
          2021年行业技能报告引用Microsoft在2020年调研报告资料,全球数位工作需求将从2020年的4千1百万急速增加到2025年的1.9亿,换句话说预计到2025年全球将有1.49亿个新的数字工作,其中：(1)软件开发(9千8百万)；(2)云和数据相关(2千3百万)；(3)数据分析,机器学习和人工智能(2千万)；(4)
          网路安全(6百万)；(5)隐私和信任(1百万)。微软也将此预测公布在其Power
          BI网站上,供有兴趣的人进一步了解各个国家,行业和领域的新数字
          <br /><br />工作需求，例如到2025年,中国电子制造业将新增788,505个软件开发人才需求,234,839个有关云和数据人才需求,76,393个软件数据分析、机器学习和AI人才需求。Coursera的报告恰恰也反应此趋势,建议企业提前布局,强化在急需技能人才的养成。报告总结以下7个重点，如图1。
          <br /><br />
          其中第5点,更是首度分析公司投资在急需技能的程度和公司股价的相关性,诚如,2021年9月号哈佛商业评论封面故事,超前部署新人才库,掌握先机,创造商机。
        </p>

        <div class="row d-flex justify-content-center">
          <div class="col-md-5 mb-3">
            <img
              data-aos="fade-right"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-1-1.png"
              alt=""
              srcset=""
            />
            <span>▲图1</span>
          </div>
          <div class="col-md-5">
            <img
              data-aos="fade-left"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-1-2.png"
              alt=""
              srcset=""
            />
            <span>投资在学习和其公司股票表现成正相关</span>
          </div>
        </div>
      </div>

      <div class="paragraph pb-3 mb-5">
        <h3 class="title pt-3 pb-3">三、人才发展</h3>
        <div class="content">
          <h5>智造将才再集结， “鸿鹄·腾飞 卓越厂长研修班（第二期）”翻新篇</h5>
          <p>
            2021/8/12(周四)下午，富士康“鸿鹄·腾飞”卓越厂长研修班（第二期）在龙华园区富士康大学L7-209正式开训，来自集团10个事业单位11个园区的30名学员参加培训。应疫情防控需求，本期采用“线上+线下”结合的方式进行。
          </p>
        </div>

        <div class="content">
          <h5>开训典礼</h5>
          <p>
            开训典礼中，富士康大学陈振国校长分享《集团数位转型升级及核心文化价值重塑》。陈校长以太极图开篇点明富士康在变与不变中发展核心的企业文化、企业竞争力与专心本业的经营理念未曾改变，但公司产业价值链的不断延展、人力结构不断优化，早已构成全球化的运作体系。数字转型不是光靠科技，而是一系列的过程，要关注策略、领导力和新思维，在富士康的转型过程中所形成的是“精益转型＋数字转型”的双螺旋模式。集团高阶主管高度重视厂长群体的培养，寄望各位厂长通过培训在思维力、管理力、技术力三方面能有所提升，并要不断强化自身的国学修养与道德文化素质。
          </p>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-5 mb-3">
            <img
              data-aos="zoom-in"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-3-1.png"
              alt=""
              srcset=""
            />
            <span>▲富士康大学 陈振国校长开训典礼分享</span>
          </div>
        </div>
        <div class="content">
          <h5>培训课堂回顾</h5>
          <p>
            在过去的几个月，学员们学习了《Mini-MBA商业逻辑12讲》(线上)、CSR/ESG、企业文化、数位转型、经营沙盘模拟、领导潜能、问题分析与解决、标杆企业走访等多元化课程，专家与讲师们循循善诱，通过案例研讨、沙盘模拟、情景模拟、沉浸学习、行动学习等多种方式，激发学员全身心投入并积极参与到学习过程中，通过互动分享与讨论，使学员们思维相互撞击，迸发火花，达到了集思广益的效果。此外，为促进学员们精神饱满、全身心投入到培训学习中，富士康大学还组织开展了丰富多彩的太极晨练、团队拓展、班委竞选、班组文化建设等系列活动，加强学员之间的融合与交流。
          </p>
        </div>
        <div class="content">
          <h5>在企业文化建设方面</h5>
          <p>
            学员们从企业文化要点、核心价值观、企业文化落地之道等几个方面进行了学习与探讨，并从知、信、行三方面激发构思，提出采用制作企业文化与员工手册、加强社区运营、典型标杆报道等方式强化集团企业文化落地方案。
          </p>
        </div>
        <div class="content">
          <h5>在数位转型发展方面</h5>
          <p>
            学员们从为什么要推进数位转型、什么是数位转型及成型之道、数位转型面临的困难与挑战、数位转型策略和顶层设计四个方面进行学习与研讨，并对在数位转型过程中遇到的导入决心不足、认知度不够、人才缺乏、信息孤岛等困难与挑战，建言献策，提出相应的解决方案，助推集团数位转型。
          </p>
        </div>
        <div class="content">
          <h5>在生产经营运营管理方面</h5>
          <p>
            学员们通过经营沙盘模拟演练，全面理解了企业整体的运作，学会利用各种财务工具分析和优化企业运营，认识到只有准确把握市场机会和市场预期，才能制定出正确的经营战略；在团队管理方面，学员们通过角色扮演与研讨，掌握了辅导、沟通、反馈授权等技巧；在问题分析与解决方面，学员们通过行动学习，挖掘与剖析生产管理过程中的痛点与难点，并针对性地提出解决方案或构想；另外，通过走访标杆企业，学员们增长了见识，了解并学习了其先进的管理经验与数为转型技术，起到了很好地借鉴意义。
            <br />
            集训结束后，学员们纷纷表示本次培训对其更好地落地与传承企业文化、提升经营管理能力、加速数位转型等方面有较大的帮助，同时也帮助其拓宽了人脉，有利于后续加强集团内各兄弟单位间的资源共享与合作！
          </p>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-4 mb-3">
            <img
              data-aos="fade-right"
              data-aos-delay="150"
              width="100%"
              height="250px"
              src="@/assets/oct-3-2.png"
              alt=""
              srcset=""
            />
            <span> ▲《理性经营与决策沙盘模拟》课堂演练</span>
          </div>
          <div class="col-md-4 mb-3">
            <img
              data-aos="fade-right"
              data-aos-delay="300"
              width="100%"
              height="250px"
              src="@/assets/oct-3-3.png"
              alt=""
              srcset=""
            />
            <span> ▲《基于行动学习的问题分析与解决》案例辅导</span>
          </div>
          <div class="col-md-4 mb-3">
            <img
              data-aos="fade-right"
              data-aos-delay="450"
              width="100%"
              height="250px"
              src="@/assets/oct-3-4.png"
              alt=""
              srcset=""
            />
            <span> ▲走进RICOH 理光</span>
          </div>
        </div>

        <div class="content">
          <h5>结训典礼</h5>
          <p>
            经过两个阶段共8天的集训，30位学员学有所得，应用所学知识对工作中遇到的人才管理、生产运营、制造开发等痛点进行剖析，并在结训典礼上进行了行动学习成果汇报，根据厂长们的集训表现以及汇报成果，评委评选出优秀报告团队、优秀学习团队以及学习之星，对学员们表示激励；陈校长还亲自为每位学员颁发了结训证书。
            <br />
            志之所趋，无远弗届；智造未来，鸿鹄腾飞！结训是培训而非学习的终点，厂长们志在智造，将携累累硕果创新实践，学以致用，从鸿鹄班起步，向卓越人腾飞！
          </p>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-4 mb-3">
            <img
              data-aos="fade-up"
              data-aos-delay="150"
              width="100%"
              height="250px"
              src="@/assets/oct-3-5.png"
              alt=""
              srcset=""
            />
            <span> ▲行动学习成果汇报</span>
          </div>
          <div class="col-md-4 mb-3">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              width="100%"
              height="250px"
              src="@/assets/oct-3-6.png"
              alt=""
              srcset=""
            />
            <span> ▲行动学习优秀报告获奖团队代表</span>
          </div>
          <div class="col-md-4 mb-3">
            <img
              data-aos="fade-up"
              data-aos-delay="450"
              width="100%"
              height="250px"
              src="@/assets/oct-3-7.png"
              alt=""
              srcset=""
            />
            <span> ▲陈振国校长为学员颁发结训证书</span>
          </div>
        </div>

        <div class="content">
          <h5>“工业互联网设备接入安装与调试”专项职业技能鉴定顺利开展</h5>
          <p>
            2021/ 9/23(周四)-2021/9/24
            (周五)，广东省2021年第二场“工业互联网设备接入安装与调试”专项职业技能鉴定在富士康大学L205教室顺利举行。此专项职业技能鉴定由深圳市职业技能鉴定指导办公室督办，富士康大学制定考核标准并落地实施。本次共有31名考生参加鉴定，最终，20名考生顺利通过考核，通过率为65%，合格者将获得人力资源和社会保障部颁发的专项职业能力证书。此证书旨在考核考生工业互联网产品设备部署联网接入、设备安装调试的能力，发展此类人才将加速集团数字化转型。
          </p>
        </div>
        <div class="content">
          <h5>『集团员工“修身+优术/齐家/治国学习计划”』</h5>
          <p>
            “修己以敬、修己以安人、修己以安百姓” ——《论语》 /
            “自天子以至于庶人，皆以修身为本”——《大学》
            <br />优秀的中华传统文化是中华民族安放心灵的精神家园和价值体现，从优秀传统文化中汲取智慧，可以提升我们的文化自信和个人文化素养与精神气质。儒学经典《大学》提出知行合一方法论，格物致知诚意正心修身齐家治国平天下。
            富士康大学精选国学文化、企业管理系列课程，共分三阶:修身优术、修身齐家
            、修身治国
            ，课程包含国学文化、自我管理、技能提升、领导力、综合运营等，旨在提升管理能力，自我修养及综合素质，达成文化价值认同，凝聚集团向心力。
            <br />
            修身优术及修身齐家两个系列的课程，正在进行专栏搭建及课程优选，将于10月份在富学宝典APP推出，敬请期待！『集团中高阶主管修身治“国”领航计划』学习任务从9月初开始，已发送至近千位中高阶主管，50%主管开始启动学习任务。学情前六个单位是：FIT、iPEBG、D群、C群、TSBG、CNSBG。
          </p>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-5 mb-3">
            <img
              data-aos="fade-right"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-3-8.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-md-5">
            <img
              data-aos="fade-left"
              data-aos-delay="100"
              width="100%"
              height="250px"
              src="@/assets/oct-3-9.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="content">
          <h5>“工业互联网设备接入安装与调试”专项职业技能鉴定顺利开展</h5>
          <p>
            2021/ 9/23(周四)-2021/9/24
            (周五)，广东省2021年第二场“工业互联网设备接入安装与调试”专项职业技能鉴定在富士康大学L205教室顺利举行。此专项职业技能鉴定由深圳市职业技能鉴定指导办公室督办，富士康大学制定考核标准并落地实施。本次共有31名考生参加鉴定，最终，20名考生顺利通过考核，通过率为65%，合格者将获得人力资源和社会保障部颁发的专项职业能力证书。此证书旨在考核考生工业互联网产品设备部署联网接入、设备安装调试的能力，发展此类人才将加速集团数字化转型。
          </p>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 mb-3">
            <img
              data-aos="zoom-in"
              data-aos-delay="100"
              width="100%"
              src="@/assets/oct-3-10.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div class="paragraph pb-3 mb-5">
        <h3 class="title pt-3 pb-3">四、新书推荐</h3>
        <div class="row mb-4 d-flex justify-content-center">
          <div class="col-6 col-md-2">
            <img
              data-aos="fade-down-right"
              data-aos-delay="100"
              width="100%"
              src="@/assets/oct-4-1.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-9 col-md-8 d-flex flex-column justify-content-center">
            <h4 style="color:green; font-weight:bold; text-align:left;">推荐理由：</h4>
            <p>实用性：本书来自IMD学院和思科的共同研究成果，通过对集合全球近百家顶级企业案例，千余名高管管理智慧萃取，作出了生存危机下非常具有实用性的实践解答；适用性：本书多角度阐述了在数字化转型时代下，现有企业应该如何成为颠覆者，而不是被别人颠覆，提供了切实可行的路径（战略与方法），对集团的数位转型有着很好的借鉴作用和指导意义。</p>
          </div>
        </div>
                <div class="row  d-flex justify-content-center">
          <div class="col-6 col-md-2">
            <img
              data-aos="fade-up-right"
              data-aos-delay="300"
              width="100%"
              src="@/assets/oct-4-2.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-9 col-md-8 d-flex flex-column justify-content-center">
            <h4 style="color:green; font-weight:bold;text-align:left;">推荐理由：</h4>
            <p>： 领导力不是个人的一项特质或素质，而是个人综合实力的体现，这种综合实力，不仅仅包括智商、情商，还包括着决策判断、逻辑分析、沟通表达等能力，领导力不是与生俱来的能力，而是一系列可培训、可模仿、可践行的能力。通过本书学习，能使读者掌握领导力，收获影响力与更专业的管理方法，特荐此书给集团的中层的管理者。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 100vh;
  /* background-image: url('https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'); */
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    /* bottom, image */
    //   url(https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
url(https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80);
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
}

.outline {
  display: flex;
  text-align: center;
  margin: 50px;
}

.list-group-item {
  background-color: #b4e0ff;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  transition: 0.25s all ease;
}

.list-group-item:hover {
  background-color: #6fb0df;
  color: white;
  font-weight: bold;
}

.paragraph {
  border: 2px solid #6fb0df;
}
.paragraph .title {
  // background-color: cornflowerblue;
  background-color: #6fb0df;
  text-align: center;
  color: white;
}
.paragraph .content h5 {
  text-align: center;
  font-weight: bold;
}

.paragraph .content {
  text-align: left;
  font-size: 1.1rem;
  margin: 50px 100px;
  line-height: 2;
}

@media (max-width: 992px) {
  .paragraph .content {
    margin: 20px 50px;
    line-height: 1.5;
  }
}
.tmp {
  width: 70%;
}
table,
th,
td {
  border: 2px solid blue;
}

img {
  object-fit: cover;
}
</style>


<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {};
  },
  methods: {
    clickSilder() {
      // 获取DOM元素
      let el = document.querySelector("#list-item-ch2");
      console.log(el.offsetTop);
      // chrome
      document.body.scrollTop = el.offsetTop;
      // firefox
      // document.documentElement.scrollTop = el.offsetTop;
    },

    clickSilderVer2() {
      location.href = "#list-item-ch2";
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>