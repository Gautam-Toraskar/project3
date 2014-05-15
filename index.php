<!DOCTYPE html>
<html lang="tr">
  <head>
    <title>Home | codfabrik</title>
    <?php require_once('includes/header.php'); ?>
    
  </head>
  <body id="home">
    <!-- <h1>Hello, world!</h1> -->

    <?php require_once('includes/navbar.php'); ?>
    <nav id="menu" class="mm-menu">
       <div style="padding-top: 20px;">
          <ul class="List">
            <li class="Selected"><a href="#intro-banner">Biz Kimiz</a></li>
            <li><a href="#services">Biz Ne Yapıyoruz</a></li>
            <li><a href="#contact">Başlayın</a></li>
          </ul>
       </div>
    </nav>

    <div class="page">
      <header>
        <div class="container">
          <div class="logo">
            <div class="logo-icon"></div>
            <img src="assets/img/codfabrik.svg">
          </div>
          <style type="text/css">
            a[href='#menu']{
              overflow: hidden;
              height: 31px;
              width: 31px;
              margin: 12px 0;
              float: left;
            }
          </style>
          <a href="#menu"><span class="icon-reorder" style="font-size:30px;color:white;"></span></a>

          <nav class="nav">
            <div>
              <ul class="list">
                <li class="selected">
                  <a href="#intro-banner">
                    <h3>Biz Kimiz</h3>
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <h3>Biz Ne Yapıyoruz</h3>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <h3>Başlayın</h3>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section id="intro-banner" class="center-tringle bg-color01-border bg-color01">
        <div class="container">
          <div class="row" style="margin: 0 auto;">
            <div class="col-md-6">
              <h1>Uygulama Fikrin mi Var?</h1>
              <h2>Hindistan’ın en iyi yazılım geliştiricileri <br/>bir tıkla senin ekibinde.</h2>
              <ul class="banner-ul">
                <li><h4>+ Apple, Android &amp; Windows işletim sistemi</h4></li>
                <li><h4>+ Yüksek performanslı uygulamalar</h4></li>
                <li><h4>+ Hızlı yazılım süreci</h4></li>
                <li><h4>+ App Store’a hazır teslim</h4></li>
              </ul>
              <div class="trial-rates" onclick="scrollToDiv('#contact');">
                <div class="rate">
                  <span class="dollar">$</span>
                  <span class="amt">20</span>
                </div>
                <div class="currency">
                  <h3>
                    Uygulama Geliştirme<br>
                    $20/saat
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 iphone">
              <img src="assets/img/iphone.png">
            </div>
          </div>

        </div>
        <!-- <div class="center-triangle-div bg-color01-border"></div> -->
      </section>

      <section id="services" class="center-tringle bg-color02 bg-color02-border">
        <div class="container text-center">
          <h2>NE SUNUYORUZ ?</h2>
          <div class="row">
            <div class="col-md-4 col-sm-4 service-block">
              <div class="service-icon service-1"></div>
              <h3>İhtiyacınızı Anlıyoruz</h3>
              <p>
                Uygulamanızın işleyişini kavrayıp en <br>
                iyi ve en hızli nasıl geliştirebileceğimizi<br>
                planlıyoruz.
              </p>
            </div>
            <div class="col-md-4 col-sm-4 service-block">
              <div class="service-icon service-2"></div>
              <h3>İşinizi Geliştiriyoruz</h3>
              <p>
                Uygulamanızı geliştirirken; UI/UX<br/>
                inşası, İş geliştirme & İçerik Tasarımına<br/>
                yönelik stratejik öneriler sunuyoruz.
              </p>
            </div>
            <div class="col-md-4 col-sm-4 service-block">
              <div class="service-icon service-3"></div>
              <h3>Anında Raporluyoruz</h3>
              <p>
                Uygulamanızın ne aşamada olduğunu <br/>
                anlık olarak telefonunuzdan takip <br/>
                etmenizi sağlıyoruz.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-4 service-block">
              <div class="service-icon service-4"></div>
              <h3>Markete Hazırlıyoruz</h3>
              <p>
                İsterseniz; Web uygulamaları, Mobil<br/>
                   Ticaret çözümleri, SEO, Database<br/>
                        Yönetimi desteği sağlıyoruz.
              </p>
            </div>
            <div class="col-md-4 col-sm-4 service-block">
              <div class="service-icon service-5"></div>
              <h3>App Store’a Yüklüyoruz</h3>
              <p>
                Uygulamanızı sizi hiç uğraştırmadan <br/>
                istediğiniz kişi/fırma adına App Store’a <br/>
                     yüklüyoruz.
              </p>
            </div>
            <div class="col-md-4 col-sm-4 service-block">
              <div class="service-icon service-6"></div>
              <h3>Gizliliğinizi Koruyoruz</h3>
              <p>
                Bizimle paylaştığınız  bilgileri kesinlikle <br/>
                3.şahıslarla paylaşmıyoruz. <br/>
              </p>
            </div>
          </div>
          <!-- <a class="down-arrow bouncy-caret" href="#contact" > -->
  <!--           <i class="glyphicon glyphicon-chevron-down"></i> -->
          </a>
        </div>
        <!-- <div class="center-triangle-div bg-color02-border"></div> -->
      </section>
      <section id="contact" class="bg-color03">
        <div class="container text-center">
          <h2>BUGÜN BAŞLAYIN</h2>

          <div id="contact-spinner" class="spinner" style="display:none;">
            <div class="dot1"></div>
            <div class="dot2"></div>
          </div>

          <form id="contact-form">
            <div class="row">
              <div class="col-md-5 col-sm-5 ">
                <div class="text-box">
                  <select id="company" class="custom-select">
                    <option>Başvurum Bireysel/Kurumsal ?</option>
                    <option>Başvurum Bireysel</option>
                    <option>Kurumsal</option>
                  </select>
                </div>
                <div class="text-box">
                  <label for="email">E-posta</label>
                  <input id="email" class="form-control" name="email" type="text"/>  
                </div>

                <div class="text-box">
                  <select id="project" class="custom-select">
                    <option>Projenizi Nasıl Tanımlarsınız ?</option>
                    <option>Oyunlar</option>
                    <option>eğlence</option>
                    <option>kamu hizmetleri</option>
                    <option>sosyal Ağ</option>
                    <option>müzik</option>
                    <option>verimlilik</option>
                    <option>Yaşam</option>
                    <option>referans</option>
                    <option>seyahat</option>
                    <option>spor</option>
                    <option>navigasyon</option>
                    <option>Sağlık ve Fitness</option>
                    <option>haber</option>
                    <option>fotoğrafçılık</option>
                    <option>maliye</option>
                    <option>iş</option>
                    <option>eğitim</option>
                    <option>hava durumu</option>
                    <option>Kitaplar</option>
                    <option>tıbbi</option>
                  </select>
                </div>
              </div>
              <style type="text/css">
                select.custom-select option{
                  background-color: #fff;
                  color: #1abc9c;
                }
                div.text-box{
                  position: relative;
                }
                div.text-box label{
                  position: absolute;
                  top: 0;
                  left: 0;
                  padding: 12px 17px;
                  color: white;
                  font-weight: normal;
                  width: 100%;
                  height: 100%;
                  text-align: left;
                  font-size: 17px;
                  cursor: pointer;
                }
              </style>
              <div class="col-md-5  col-sm-5 pull-right" >
                <div class="text-box">
                  <label for="name">Ad Soyad</label>
                  <input id="name" class="form-control" name="name" type="text"/>  
                </div>

                <div class="text-box">
                  <label for="projectname">Proje Adı</label>
                  <input id="projectname" class="form-control" name="projectname" type="text"/>  
                </div>

                <div class="text-box">
                  <select id="platform" class="custom-select" required>
                    <option>platform</option>
                    <option>iOS</option>
                    <option>windows</option>
                    <option>android</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="text-box">
                  <label for="desc">Fikrinizin içeriğinden bahsetmeden uygulama işleyişi hakında bilgi veriniz</label>
                  <textarea id="desc" name="desc" class="form-control custome-textarea"></textarea>
                </div>
              </div>
            </div>

            <div class="col-md-3 pull-left" style="padding:0;">
              <div class="text-box">
                <label for="captcha" style="padding: 18px 17px;"></label>
                <input id="captcha" class="form-control" name="captcha" type="text" style='height:59px;'/>
              </div>
            </div>
              <!-- <button type="submit" name="submit" class="contact-submit">START</button> -->
              <div class="col-md-3 pull-right" style="padding:0;">
                <input class="btn btn-primary btn-block pull-right" type="submit" value="Start">  
              </div>
          </form>
          <div class="after-submit" style="display:none;">
            <h3>Uygulamak için teşekkür ederiz.</h3>
            <p>Biz yakında size geri alacak!</p>
          </div>  
        </div>
      </section>

      <?php require_once('includes/footer.php'); ?>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="assets/packages/mm-navbar/jquery.mmenu.min.all.js"></script>
    <script src="assets/js/main.js"></script>
    <script type="text/javascript" src="assets/js/validation.js"></script>
    <script type="text/javascript">DrawBotBoot();</script>
  </body>
</html>