import React, { useEffect, useState } from 'react'
import { keyframes, styled } from 'styled-components'
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import {BiLogoReact} from "react-icons/bi";
import { Matriz } from './Matriz';
import { AiFillLinkedin } from "react-icons/ai";

const Anima = keyframes`
from{opacity:0;}
to{opacity:1;}
`
const Ohana = styled.h1`
grid-area:2/1/3/2;
color:${props=>props.cul};
justify-content:center;
display:flex;
font-weight:lighter;
transition:1s;

`
const Envoltura = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:space-around;
gap:10px;
animation:${Anima} 2s;
transition: 1s;
& svg:nth-child(1){
background-color:#feff00;
}
& svg:nth-child(2){
 background-color:#feff00;
}
& svg:nth-child(3){
background-color:#feff00;
}
& svg:nth-child(4){
background-color:#feff00;
}
& svg:nth-child(n){
filter:drop-shadow(1px 1px 25px #feff66);
color:white;
border-radius:50%;
padding:2%;
border-style:solid;
border-color:#FFDD42;
}
@media(max-width:700px){
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:1fr 1fr;
}
`
const Animal = keyframes`
0%{background-color:purple;}
50%{background-color:white;}
100%{background-color:purple;}
`
const Arriba = keyframes`
from{
  transform:translateY(0)
}
to{
  transform:translateY(-1000px)
}
`
const Estrella = styled.div`
transition:3s;
 animation:${Arriba} 50s infinite linear;
 width:1px;
  z-index:2;
  height:1px;
  border-radius:50%;
  filter:drop-shadow(1px 1px 20px yellow);
  background-color:white;
  position:absolute;
  transform:translateY(-100%);
  box-shadow:20px -20px 1px white,
  20px -20px 1px white,
  120px -20px 1px white,
  80px -20px 1px white,
  800px -20px 1px white,
  700px -20px 1px white,
  600px -20px 1px white,
  500px -20px 1px white,
  400px -20px 1px white,
  300px -20px 1px white,
  200px -20px 1px white,
  247px -641px 1px white,
 210px -678px 1px white,
 687px -1015px 1px white,
 3px -651px 1px white,
 6px -287px 1px white,
 455px -953px 1px white,
 830px -46px 1px white,
 706px -418px 1px white,
 393px -600px 1px white,
 808px -347px 1px white,
 959px -9px 1px white,
 374px -871px 1px white,
 18px -646px 1px white,
 800px -927px 1px white,
 584px -1073px 1px white,
 945px -363px 1px white,
 459px -498px 1px white,
 957px -250px 1px white,
 244px -753px 1px white,
 674px -491px 1px white,
 886px -899px 1px white,
 962px -641px 1px white,
 306px -1135px 1px white,
 936px -682px 1px white,
 691px -287px 1px white,
 360px -454px 1px white,
 600px -271px 1px white,
 240px -829px 1px white,
 279px -172px 1px white,
 635px -503px 1px white,
 726px -141px 1px white,
 894px -315px 1px white,
 790px -356px 1px white,
 50px -537px 1px white,
 875px -896px 1px white,
 374px -934px 1px white,
 464px -789px 1px white,
 680px -415px 1px white,
 914px -775px 1px white,
 987px -1128px 1px white,
 325px -509px 1px white,
 436px -21px 1px white,
 897px -881px 1px white,
 276px -703px 1px white,
 190px -464px 1px white,
 279px -365px 1px white,
 312px -467px 1px white,
 818px -831px 1px white,
 569px -134px 1px white,
 948px -192px 1px white,
 545px -896px 1px white,
 871px -213px 1px white,
 795px -1158px 1px white,
 396px -541px 1px white,
 661px -795px 1px white,
 464px -83px 1px white,
 200px -156px 1px white,
 495px -816px 1px white,
 109px -310px 1px white,
 52px -1088px 1px white,
 246px -897px 1px white,
 195px -1087px 1px white,
 810px -9px 1px white,
 920px -933px 1px white,
 355px -193px 1px white,
 957px -889px 1px white,
 958px -846px 1px white,
 662px -429px 1px white,
 794px -398px 1px white,
 491px -221px 1px white,
 244px -1098px 1px white,
 671px -150px 1px white,
 170px -352px 1px white,
 181px -614px 1px white,
 76px -361px 1px white,
 596px -164px 1px white,
 769px -565px 1px white,
 851px -277px 1px white,
 971px -906px 1px white,
 881px -906px 1px white,
 623px -471px 1px white,
 57px -121px 1px white,
 604px -301px 1px white,
 39px -386px 1px white,
 450px -1056px 1px white,
 484px -862px 1px white,
 503px -303px 1px white,
 909px -1069px 1px white,
 607px -347px 1px white,
 224px -5px 1px white,
 956px -466px 1px white,
 386px -1057px 1px white,
 208px -585px 1px white,
 961px -1124px 1px white,
 880px -697px 1px white,
 245px -750px 1px white,
 593px -570px 1px white,
 831px -690px 1px white,
 327px -553px 1px white,
 268px -567px 1px white,
 20px -999px 1px white,
 230px -455px 1px white,
 917px -431px 1px white,
 237px -946px 1px white,
 643px -565px 1px white,
 996px -517px 1px white,
 183px -292px 1px white,
 367px -1102px 1px white,
 407px -359px 1px white,
 887px -143px 1px white,
 988px -1124px 1px white,
 450px -967px 1px white,
 88px -803px 1px white,
 844px -185px 1px white,
 922px -222px 1px white,
 201px -169px 1px white,
 442px -811px 1px white,
 685px -345px 1px white,
 331px -538px 1px white,
 465px -237px 1px white,
 177px -441px 1px white,
 111px -17px 1px white,
 813px -820px 1px white,
 911px -984px 1px white,
 930px -310px 1px white,
 155px -321px 1px white,
 386px -1106px 1px white,
 498px -651px 1px white,
 917px -621px 1px white,
 755px -947px 1px white,
 605px -712px 1px white,
 209px -192px 1px white,
 281px -515px 1px white,
 977px -452px 1px white,
 809px -546px 1px white,
 756px -501px 1px white,
 161px -744px 1px white,
 925px -482px 1px white,
 664px -46px 1px white,
 483px -398px 1px white,
 911px -856px 1px white,
 966px -230px 1px white,
 462px -693px 1px white,
 391px -900px 1px white,
 854px -152px 1px white,
 425px -739px 1px white,
 290px -211px 1px white,
 707px -751px 1px white,
 988px -921px 1px white,
 481px -884px 1px white,
 466px -917px 1px white,
 72px -326px 1px white,
 909px -659px 1px white,
 431px -847px 1px white,
 872px -104px 1px white,
 46px -785px 1px white,
 150px -307px 1px white,
 488px -1179px 1px white,
 511px -411px 1px white,
 455px -1097px 1px white,
 861px -534px 1px white,
 131px -1002px 1px white,
 14px -814px 1px white,
 132px -970px 1px white,
 227px -838px 1px white,
 573px -444px 1px white,
 184px -144px 1px white,
 306px -622px 1px white,
 289px -347px 1px white,
 44px -1148px 1px white,
 185px -462px 1px white,
 592px -767px 1px white,
 16px -1009px 1px white,
 257px -1167px 1px white,
 152px -944px 1px white,
 924px -398px 1px white,
 324px -639px 1px white,
 639px -529px 1px white,
 378px -1185px 1px white,
 364px -873px 1px white,
 540px -1017px 1px white,
 475px -1138px 1px white,
 71px -550px 1px white,
 542px -167px 1px white,
 502px -76px 1px white,
 694px -861px 1px white,
 40px -953px 1px white,
 186px -665px 1px white,
 997px -192px 1px white,
 85px -240px 1px white,
 186px -888px 1px white,
 504px -383px 1px white,
 932px -407px 1px white,
 303px -1188px 1px white,
 552px -262px 1px white,
 642px -913px 1px white,
 19px -667px 1px white,
 448px 178px 1px white,
 11px 185px 1px white,
 14px 481px 1px white,
 370px 409px 1px white,
 61px 671px 1px white,
 282px 818px 1px white,
 401px 404px 1px white,
 709px 875px 1px white,
 426px 50px 1px white,
 865px 1197px 1px white,
 334px 16px 1px white,
 590px 253px 1px white,
 369px 311px 1px white,
 762px 440px 1px white,
 175px 554px 1px white,
 636px 635px 1px white,
 137px 614px 1px white,
 827px 840px 1px white,
 912px 54px 1px white,
 23px 1137px 1px white,
 299px 577px 1px white,
 235px 135px 1px white,
 89px 517px 1px white,
 854px 369px 1px white,
 889px 757px 1px white,
 958px 143px 1px white,
 295px 269px 1px white,
 657px 243px 1px white,
 166px 257px 1px white,
 715px 278px 1px white,
 418px 1078px 1px white,
 47px 448px 1px white,
 634px 254px 1px white,
 454px 270px 1px white,
 621px 203px 1px white,
 948px 813px 1px white,
 815px 474px 1px white,
 820px 104px 1px white,
 13px 654px 1px white,
 697px 771px 1px white,
 18px 974px 1px white,
 39px 1159px 1px white,
 683px 382px 1px white,
 247px 6px 1px white,
 942px 468px 1px white,
 357px 344px 1px white,
 243px 940px 1px white,
 48px 959px 1px white,
 348px 748px 1px white,
 685px 604px 1px white,
 104px 227px 1px white,
 960px 0px 1px white,
 231px 686px 1px white,
 328px 97px 1px white,
 22px 39px 1px white,
 388px 801px 1px white,
 111px 913px 1px white,
 730px 582px 1px white,
 960px 1133px 1px white,
 418px 198px 1px white,
 504px 16px 1px white,
 576px 1134px 1px white,
 380px 257px 1px white,
 554px 1125px 1px white,
 621px 1077px 1px white,
 713px 1114px 1px white,
 652px 775px 1px white,
 864px 1103px 1px white,
 430px 616px 1px white,
 473px 1px 1px white,
 771px 396px 1px white,
 865px 157px 1px white,
 895px 700px 1px white,
 203px 1116px 1px white,
 807px 817px 1px white,
 760px 886px 1px white,
 858px 377px 1px white,
 594px 182px 1px white,
 55px 568px 1px white,
 985px 1145px 1px white,
 443px 64px 1px white,
 37px 906px 1px white,
 299px 135px 1px white,
 38px 745px 1px white,
 725px 1081px 1px white,
 353px 377px 1px white,
 995px 81px 1px white,
 347px 668px 1px white,
 55px 801px 1px white,
 5px 36px 1px white,
 941px 284px 1px white,
 288px 705px 1px white,
 840px 790px 1px white,
 843px 765px 1px white,
 519px 1094px 1px white,
 464px 1162px 1px white,
 384px 391px 1px white,
 36px 205px 1px white,
 836px 711px 1px white,
 789px 20px 1px white,
 990px 1059px 1px white,
 550px 382px 1px white,
 863px 938px 1px white,
 156px 635px 1px white,
 247px 48px 1px white,
 281px 1066px 1px white,
 284px 1128px 1px white,
 495px 1130px 1px white,
 929px 424px 1px white,
 325px 1020px 1px white,
 158px 450px 1px white,
 525px 426px 1px white,
 85px 636px 1px white,
 986px 1107px 1px white,
 795px 466px 1px white,
 694px 1055px 1px white,
 409px 310px 1px white,
 595px 1010px 1px white,
 183px 46px 1px white,
 643px 335px 1px white,
 168px 465px 1px white,
 182px 256px 1px white,
 739px 1167px 1px white,
 304px 135px 1px white,
 638px 439px 1px white,
 761px 39px 1px white,
 608px 430px 1px white,
 239px 412px 1px white,
 711px 465px 1px white,
 916px 283px 1px white,
 328px 1132px 1px white,
 333px 1085px 1px white,
 293px 13px 1px white,
 151px 611px 1px white,
 28px 592px 1px white,
 92px 407px 1px white,
 479px 553px 1px white,
 16px 869px 1px white,
 835px 147px 1px white,
 55px 904px 1px white,
 698px 892px 1px white,
 539px 1062px 1px white,
 61px 361px 1px white,
 342px 658px 1px white,
 327px 835px 1px white,
 591px 419px 1px white,
 631px 533px 1px white,
 174px 1185px 1px white,
 11px 181px 1px white,
 623px 308px 1px white,
 242px 454px 1px white,
 469px 617px 1px white,
 737px 1058px 1px white,
 126px 259px 1px white,
 138px 145px 1px white,
 722px 422px 1px white,
 956px 726px 1px white,
 320px 21px 1px white,
 26px 569px 1px white,
 436px 593px 1px white,
 977px 376px 1px white,
 1px 578px 1px white,
 989px 489px 1px white,
 137px 53px 1px white,
 244px 595px 1px white,
 575px 994px 1px white,
 182px 956px 1px white,
 500px 584px 1px white,
 125px 835px 1px white,
 558px 1031px 1px white,
 240px 356px 1px white,
 55px 523px 1px white,
 323px 175px 1px white,
 93px 1066px 1px white,
 443px 897px 1px white,
 37px 154px 1px white,
 354px 1071px 1px white,
 903px 1082px 1px white,
 691px 416px 1px white,
 753px 621px 1px white,
 287px 918px 1px white,
 950px 1040px 1px white,
 564px 839px 1px white,
 353px 631px 1px white,
 639px 1100px 1px white,
 845px 1042px 1px white,
 678px 1098px 1px white,
 171px 318px 1px white,
 304px 300px 1px white,
 534px 299px 1px white,
 657px 588px 1px white,
 261px 996px 1px white,
 95px 1079px 1px white,
 206px 985px 1px white,
 717px 1160px 1px white,
 796px 202px 1px white,
 478px 1157px 1px white,
 510px 342px 1px white,
 837px 72px 1px white,
 924px 518px 1px white;

`
const Estrella1 = styled.div`
transition:3s;
 animation:${Arriba} 90s infinite linear;
 width:2px;
  z-index:2;
  height:2px;
  border-radius:50%;
  filter:drop-shadow(1px 1px 20px yellow);
  background-color:white;
  position:absolute;
  box-shadow:
  759px 1064px 1px white,
 26px 353px 1px white,
 749px 1022px 1px white,
 236px 982px 1px white,
 386px 604px 1px white,
 665px 106px 1px white,
 714px 1168px 1px white,
 731px 429px 1px white,
 147px 205px 1px white,
 704px 291px 1px white,
 809px 974px 1px white,
 728px 896px 1px white,
 239px 1068px 1px white,
 173px 815px 1px white,
 329px 473px 1px white,
 124px 477px 1px white,
 165px 657px 1px white,
 934px 749px 1px white,
 10px 981px 1px white,
 924px 996px 1px white,
 616px 1076px 1px white,
 451px 348px 1px white,
 390px 587px 1px white,
 949px 8px 1px white,
 534px 140px 1px white,
 685px 73px 1px white,
 534px 566px 1px white,
 27px 1196px 1px white,
 275px 122px 1px white,
 573px 1197px 1px white,
 129px 1018px 1px white,
 148px 1044px 1px white,
 847px 875px 1px white,
 818px 647px 1px white,
 832px 1189px 1px white,
 151px 819px 1px white,
 5px 615px 1px white,
 63px 417px 1px white,
 892px 344px 1px white,
 129px 495px 1px white,
 90px 299px 1px white,
 161px 650px 1px white,
 653px 722px 1px white,
 823px 866px 1px white,
 756px 1139px 1px white,
 404px 754px 1px white,
 233px 63px 1px white,
 988px 160px 1px white,
 771px 847px 1px white,
 255px 597px 1px white,
 989px 998px 1px white,
 65px 1066px 1px white,
 684px 836px 1px white,
 382px 291px 1px white,
 475px 51px 1px white,
 317px 630px 1px white,
 640px 478px 1px white,
 138px 1019px 1px white,
 540px 583px 1px white,
 316px 134px 1px white,
 984px 876px 1px white,
 205px 894px 1px white,
 221px 294px 1px white,
 548px 58px 1px white,
 756px 96px 1px white,
 392px 889px 1px white,
 81px 971px 1px white,
 702px 1022px 1px white,
 928px 438px 1px white,
 482px 425px 1px white,
 72px 580px 1px white,
 481px 711px 1px white,
 857px 1114px 1px white,
 81px 518px 1px white,
 336px 686px 1px white,
 525px 85px 1px white,
 938px 681px 1px white,
 853px 761px 1px white,
 293px 631px 1px white,
 300px 911px 1px white,
 325px 560px 1px white,
 433px 1125px 1px white,
 51px 197px 1px white,
 636px 23px 1px white,
 212px 276px 1px white,
 987px 993px 1px white,
 137px 51px 1px white,
 211px 223px 1px white,
 197px 561px 1px white,
 702px 237px 1px white,
 183px 662px 1px white,
 616px 1088px 1px white,
 707px 947px 1px white,
 288px 365px 1px white,
 457px 2px 1px white,
 456px 1156px 1px white,
 257px 619px 1px white,
 957px 547px 1px white,
 584px 52px 1px white,
 456px 885px 1px white,
 681px 288px 1px white,
 749px 361px 1px white,
 372px 374px 1px white,
 543px 824px 1px white,
 987px 859px 1px white,
 677px 31px 1px white,
 405px 437px 1px white,
 674px 520px 1px white,
 346px 346px 1px white,
 32px 355px 1px white,
 833px 141px 1px white,
 615px 356px 1px white,
 359px 842px 1px white,
 66px 727px 1px white,
 415px 230px 1px white,
 260px 427px 1px white,
 298px 574px 1px white,
 17px 287px 1px white,
 239px 401px 1px white,
 465px 72px 1px white,
 612px 1157px 1px white,
 127px 1174px 1px white,
 621px 189px 1px white,
 769px 105px 1px white,
 373px 61px 1px white,
 540px 785px 1px white,
 810px 570px 1px white,
 442px 958px 1px white,
 900px 1192px 1px white,
 62px 367px 1px white,
 109px 455px 1px white,
 787px 1065px 1px white,
 23px 196px 1px white,
 809px 344px 1px white,
 493px 208px 1px white,
 582px 709px 1px white,
 755px 1175px 1px white,
 616px 1029px 1px white,
 721px 1049px 1px white,
 237px 456px 1px white,
 617px 390px 1px white,
 67px 1150px 1px white,
 548px 1023px 1px white,
 689px 907px 1px white,
 448px 276px 1px white,
 871px 813px 1px white,
 674px 155px 1px white,
 410px 595px 1px white,
 866px 603px 1px white,
 182px 1172px 1px white,
 225px 1124px 1px white,
 673px 504px 1px white,
 411px 658px 1px white,
 434px 657px 1px white,
 812px 1111px 1px white,
 800px 392px 1px white,
 550px 447px 1px white,
 638px 915px 1px white,
 814px 451px 1px white,
 166px 1180px 1px white,
 586px 372px 1px white,
 295px 625px 1px white,
 359px 196px 1px white,
 885px 237px 1px white,
 211px 1069px 1px white,
 991px 1068px 1px white,
 28px 677px 1px white,
 592px 864px 1px white,
 536px 946px 1px white,
 26px 732px 1px white,
 514px 866px 1px white,
 315px 357px 1px white,
 760px 261px 1px white,
 718px 97px 1px white,
 872px 792px 1px white,
 563px 395px 1px white,
 493px 575px 1px white,
 133px 686px 1px white,
 725px 1127px 1px white,
 536px 453px 1px white,
 399px 181px 1px white,
 818px 487px 1px white,
 323px 955px 1px white,
 135px 33px 1px white,
 689px 824px 1px white,
 517px 336px 1px white,
 188px 886px 1px white,
 705px 268px 1px white,
 98px 224px 1px white,
 56px 613px 1px white,
 190px 1039px 1px white,
 121px 1068px 1px white,
 493px 124px 1px white,
 678px 570px 1px white,
 589px 1183px 1px white,
 921px 1007px 1px white,
 789px 717px 1px white,
 872px 1184px 1px white,
 376px 369px 1px white,
 22px 291px 1px white;
`
const Estrella2 = styled.div`
transition:3s;
 animation:${Arriba} 120s infinite linear;
 width:3px;
  z-index:2;
  height:3px;
  border-radius:50%;
  filter:drop-shadow(1px 1px 20px yellow);
  background-color:white;
  position:absolute;
  box-shadow:
  1303px 1440px 1px white,
1443px 801px 1px white,
146px 803px 1px white,
1420px 339px 1px white,
486px 87px 1px white,
478px 664px 1px white,
1135px 1497px 1px white,
318px 1470px 1px white,
798px 1048px 1px white,
527px 844px 1px white,
381px 1097px 1px white,
418px 1225px 1px white,
12px 1431px 1px white,
980px 846px 1px white,
226px 43px 1px white,
207px 1158px 1px white,
511px 305px 1px white,
490px 469px 1px white,
578px 147px 1px white,
1423px 1191px 1px white,
831px 929px 1px white,
387px 1408px 1px white,
282px 134px 1px white,
1053px 446px 1px white,
433px 1160px 1px white,
1487px 1337px 1px white,
618px 1049px 1px white,
55px 936px 1px white,
884px 1363px 1px white,
1246px 972px 1px white,
521px 1447px 1px white,
920px 1226px 1px white,
1047px 351px 1px white,
1197px 882px 1px white,
398px 1357px 1px white,
939px 625px 1px white,
1462px 859px 1px white,
52px 978px 1px white,
1069px 372px 1px white,
133px 1201px 1px white,
596px 789px 1px white,
1413px 176px 1px white,
1373px 200px 1px white,
9px 578px 1px white,
111px 248px 1px white,
792px 579px 1px white,
1481px 54px 1px white,
959px 679px 1px white,
634px 100px 1px white,
846px 693px 1px white,
1251px 1390px 1px white,
724px 148px 1px white,
648px 787px 1px white,
298px 1222px 1px white,
1038px 523px 1px white,
557px 685px 1px white,
629px 391px 1px white,
1462px 730px 1px white,
1494px 94px 1px white,
1235px 685px 1px white,
29px 1272px 1px white,
288px 1472px 1px white,
1071px 428px 1px white,
256px 941px 1px white,
1086px 559px 1px white,
708px 1401px 1px white,
425px 438px 1px white,
1203px 1130px 1px white,
512px 1435px 1px white,
1199px 303px 1px white,
1073px 1339px 1px white,
32px 1138px 1px white,
654px 1194px 1px white,
130px 920px 1px white,
501px 886px 1px white,
915px 1466px 1px white,
1449px 180px 1px white,
1073px 1453px 1px white,
1377px 724px 1px white,
920px 355px 1px white,
1497px 296px 1px white,
1054px 1080px 1px white,
1197px 1146px 1px white,
409px 578px 1px white,
1399px 201px 1px white,
1467px 1190px 1px white,
90px 977px 1px white,
948px 1170px 1px white,
1406px 1101px 1px white,
261px 1469px 1px white,
1098px 1249px 1px white,
683px 471px 1px white,
782px 1048px 1px white,
792px 836px 1px white,
492px 1414px 1px white,
607px 608px 1px white,
227px 250px 1px white,
119px 254px 1px white,
1041px 8px 1px white,
1181px 607px 1px white,
871px 538px 1px white,
183px 222px 1px white,
551px 742px 1px white,
233px 1121px 1px white,
1052px 955px 1px white,
249px 1451px 1px white,
613px 279px 1px white,
293px 473px 1px white,
1342px 30px 1px white,
1207px 792px 1px white,
149px 892px 1px white,
653px 514px 1px white,
1317px 783px 1px white,
222px 898px 1px white,
322px 867px 1px white,
1352px 1235px 1px white,
349px 197px 1px white,
52px 990px 1px white,
541px 969px 1px white,
469px 1214px 1px white,
8px 840px 1px white,
1390px 621px 1px white,
943px 1415px 1px white,
243px 736px 1px white,
496px 531px 1px white,
1224px 39px 1px white,
354px 1317px 1px white,
362px 670px 1px white,
161px 99px 1px white,
623px 1030px 1px white,
348px 545px 1px white,
420px 113px 1px white,
102px 512px 1px white,
188px 1088px 1px white,
652px 1023px 1px white,
990px 153px 1px white,
858px 773px 1px white,
334px 1022px 1px white,
213px 614px 1px white,
536px 385px 1px white,
1191px 483px 1px white,
254px 294px 1px white,
934px 769px 1px white,
130px 76px 1px white,
688px 1377px 1px white,
367px 120px 1px white,
1424px 392px 1px white,
764px 101px 1px white,
1475px 1320px 1px white,
1037px 1032px 1px white,
346px 1357px 1px white,
40px 1399px 1px white,
375px 468px 1px white,
1414px 1305px 1px white,
269px 773px 1px white,
1329px 823px 1px white,
1463px 908px 1px white,
682px 1347px 1px white,
878px 931px 1px white,
1142px 952px 1px white,
830px 1484px 1px white,
191px 736px 1px white,
1116px 1182px 1px white,
996px 444px 1px white,
1233px 60px 1px white,
963px 1007px 1px white,
1428px 1048px 1px white,
1391px 722px 1px white,
755px 1444px 1px white,
997px 601px 1px white,
837px 1498px 1px white,
1429px 539px 1px white,
221px 1335px 1px white,
520px 1255px 1px white,
832px 1308px 1px white,
785px 38px 1px white,
827px 1218px 1px white,
1357px 774px 1px white,
1387px 982px 1px white,
1070px 1407px 1px white,
712px 1224px 1px white,
1090px 1466px 1px white,
1108px 401px 1px white,
1149px 1216px 1px white,
537px 577px 1px white,
1188px 64px 1px white,
296px 1306px 1px white,
1359px 867px 1px white,
444px 473px 1px white,
1054px 1486px 1px white,
215px 728px 1px white,
68px 1418px 1px white,
1001px 996px 1px white,
496px 1011px 1px white,
258px 936px 1px white,
1104px 177px 1px white,
231px 366px 1px white,
525px 496px 1px white,
1179px 91px 1px white,
547px 861px 1px white;

`
const Envol = styled.div`
display:flex;
width:100%;
height:100%;
margin-top:2npm 0px;
grid-area:1/1/3/2;
border-radius:20px;
z-index:30;
animation:${Anima} 2s;
`
export const Hola = ({cuul}) => {
  useEffect(() => {
  }, [])
  

  return (
    <>
    <Ohana cul={cuul}>Hola, soy  LUIS <br />
Desarrollador Web
    </Ohana>
    </>
  )
}
export const Proyec = ({cuul}) => {
  return (
    <>
    <Estrella></Estrella>
    <Estrella1></Estrella1>
    <Estrella2></Estrella2>
<Envol>
<Matriz/>
</Envol>

    
    </>
  )
}
let cambio = 0
export const Habilidades = ({cuul}) => { 
  return (
    <>
    <Ohana cul={cuul}> 
    <Envoltura  >
     <AiOutlineHtml5 size='100' />
    <BiLogoCss3 size='100'  />
    <BiLogoJavascript size='100'  />
    <BiLogoReact size='100'  />
    </Envoltura>
    </Ohana>
    </>
  )
}

export const Contac = ({cuul}) => {
  return (
    <>
    <div className="tpl-snow">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
    <Ohana cul={cuul}>
      <a href='https://www.linkedin.com/in/luis-martinez-12368428a/' target='_blank'>
       <AiFillLinkedin size='100'/>
       </a>
    </Ohana>
    </>
  )
}
