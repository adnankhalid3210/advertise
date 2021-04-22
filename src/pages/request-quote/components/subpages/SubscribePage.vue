<template>
<section class="subscribeBg">
      <article class="two-col">
    <h2 class="sub-headline"><strong>콩콩(Congkong)</strong>의 <br>최신 소식을 받고 싶으신가요?</h2>
    <p>전문행사 정보와 업데이트 내용을 받고 싶으시다면 이메일 주소를 입력 후 구독하기 버튼을 클릭해 주세요.</p>
    <div class="form-group">
        <input type="text" class="" placeholder="이메일 주소를 입력해주세요" />
        <button class="button">구독하기</button>
        <small>* 입력해 주시는 이메일 주소는 뉴스레터 외의 목적으로는 사용되지 않습니다.</small>
    </div>
      </article>
      <article class="two-col-2">
          <img :src="require('../../assets/subscribe.png')"/>
      </article>
    </section>
</template>

<script lang="ts">
import SubPage from "@/pages/request-quote/components/SubPage"

export default SubPage.extend({
  name: "SubscribePage",
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default";

.subscribeBg{
        background: #F8FAFA;
    width: 100% !important;
    padding: 60px 12% !important;
}

.subscribeBg{
        p{
      font-size: 16px;
      letter-spacing: -0.4px;
color: #77777A;
  }
}

.sub-headline {
    font-size: 32px;
        line-height: 45px;
  margin: 10px auto;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  ::v-deep strong {
    color: $defaultColor;
    font-weight: bold;
  }
  &--narrow {
    margin: $space-s auto;
  }
  
}

.form-group{
       display: block;
    margin-top: 20px;
    input{
            background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DADCE0;
    border-radius: 4px;
    width: 67%;
    min-height: 50px;
    padding-left: 15px;
    }
    button{
        background: transparent linear-gradient(111deg, #FF606D 0%, #F33737 100%) 0% 0% no-repeat padding-box;
border-radius: 6px;
min-height: 50px;
margin-left: 15px;
width: 28%;
color:#fff;

    }
    small{
        letter-spacing: -0.38px;
color: #8E8E90;
font-size: 15px;
font-weight: 400;
@apply block;
    margin-top: 20px;
    }
}

.two-col{
    width: 55%;
    float:left;
}

.two-col-2{
    width: 45%;
    float:left;
}

</style>
