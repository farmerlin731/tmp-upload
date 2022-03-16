<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
    style="background-color: #e3f2fd;"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">富士康大學</a>

      <button
        class="navbar-toggler ms-auto"
        ref="toggleBtn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link cancel" to="/">首頁</router-link>
          </li>


          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              學情報告
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item cancel" to="/reporter-oct/"
                  >Oct/2021</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item cancel" to="/reporter-nov/"
                  >Nov/2021</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item cancel" to="/reporter-dec/"
                  >Dec/2021</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link cancel" to="/about/"
              >關於我們</router-link
            >
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-brand {
  position: absolute;
  left: 50px;
}

@media (max-width: 992px) {
  .navbar-brand {
    position: relative;
  }
}

.nav-item{
  margin-left: 30px;
  font-weight:bold;
}
</style>

<script>
export default {
  data() {
    return {
      tmpdata: "hahaha",
    };
  },
  methods: {
    test() {
      console.log(this.$refs.toggleBtn);
      this.$refs.toggleBtn.click();
    },
  },
  mounted() {
    // this.test();
    console.log(window.innerWidth);
    // console.log(this.tmpdata);
    // 自己寫這段真爽...雖然有點醜 XD

    const cancelBtnList = document.querySelectorAll(".cancel");
    console.log(cancelBtnList);
    cancelBtnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log("pushItem!!!");
        if (window.innerWidth < 1000) {
          this.$refs.toggleBtn.click();
        }
      });
    });
  },
};
</script>