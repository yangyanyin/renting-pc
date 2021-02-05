<template>
  <div class="conveniences">
    <h3 class="other-t">便利设施</h3>
    <ul class="clearfix">
      <li>
        <img src="../../assets/image/24hours-icon.png" alt="24小时可访问" />
        24小时可访问
      </li>
      <li>
        <img src="../../assets/image/air-conditioning-icon.png" alt="空调" />
        空调
      </li>
      <li>
        <img src="../../assets/image/pantry-icon.png" alt="停车场" />
        停车场
      </li>
      <li>
        <img src="../../assets/image/elevator-icon.png" alt="电梯" />
        电梯
      </li>
      <li>
        <img src="../../assets/image/security-icon.png" alt="安保" />
        安保
      </li>
      <li>
        <img src="../../assets/image/front-desk-icon.png" alt="前台接待" />
        前台接待
      </li>
      <li>
        <img src="../../assets/image/pantry-icon.png" alt="茶水间" />
        茶水间
      </li>
      <li>
        <img src="../../assets/image/recruitment-icon.png" alt="企业招牌" />
        企业招牌
      </li>
      <li>
        <img src="../../assets/image/corporate-image-icon.png" alt="良好企业形象" />
        良好企业形象
      </li>
      <li>
        <img src="../../assets/image/subway-icon.png" alt="近地铁" />
        近地铁
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.conveniences {
  ul {
    padding-top: 5px;
    li {
      float: left;
      width: 120px;
      height: 81px;
      margin: 20px 27px 0 0;
      text-align: center;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
      &:nth-child(5n+0) {
        margin-right: 0;
      }
      img {
        width: 30px;
        margin: 10px auto 5px;
      }
    }
  }
}
</style>