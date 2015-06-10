$(document).ready(function() {

    // Counter
    $(".header-countdown-wrapper").countdown("2015/06/08", function(event) {
        var $this = $(this).html(event.strftime(''
                + '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 header-counter">'
                +   '<div class="header-counter-item-wrapper">'
                +       '<span class="counter-int">%w</span>'
                +       '<span class="counter-type">hafta</span>'
                +   '</div>'
                + '</div>'
                + '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 header-counter">'
                +   '<div class="header-counter-item-wrapper">'
                +       '<span class="counter-int">%d</span>'
                +       '<span class="counter-type">gÃ¼n</span>'
                +   '</div>'
                + '</div>'
                + '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 header-counter">'
                +   '<div class="header-counter-item-wrapper">'
                +       '<span class="counter-int">%H</span>'
                +       '<span class="counter-type">saat</span>'
                +   '</div>'
                + '</div>'
                + '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 header-counter">'
                +   '<div class="header-counter-item-wrapper">'
                +       '<span class="counter-int">%M</span>'
                +       '<span class="counter-type">dakika</span>'
                +   '</div>'
                + '</div>'));
    });
    // Counter

    // Twitter
    $('.js-twitter-slider-init').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        items: 1
    });
    // Twitter

    // Parallax
    $('.parallax-container').parallax(function () {


    });
    // Parallax

    // Custom Effects
    $('section').addClass('animated');

    var timer = 0;

        // Logo effect
        $('.header-logo').addClass('fadeInDown');

        // Slogan effect
        $('.header-slogan span.first-line').addClass('bounceInLeft');
        $('.header-slogan span.second-line').addClass('bounceInRight');

        // Slogan under date effect
        setTimeout(function() {
            $('.header-date-location').addClass('fadeInDown');
        }, timer = timer + 750);

        // Counter effect
        setTimeout(function() {
            $('.header-countdown-wrapper').addClass('flipInY');
        }, timer = timer + 750);

        // Button link effect
        setTimeout(function() {
            $('.header-buttons a').css('opacity', 1);
            $('.header-buttons .gray-fill').addClass('slideInLeft');
            $('.header-buttons .gray').addClass('slideInRight');
        }, timer = timer + 750);

        // What is hackathon
        $('.what-is-hackathon').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.what-is-hackathon');

            $this.find('.section-title').addClass('fadeInLeft');
            $this.find('.section-description').addClass('fadeInRight');

            $this.find('#sub-section-column1').css('opacity', 1).addClass('bounceInLeft');
            $this.find('#sub-section-column2').css('opacity', 1).addClass('bounceIn');
            $this.find('#sub-section-column3').css('opacity', 1).addClass('bounceInRight');
        });
        // What is hackathon

        // What is thackathon
        $('.what-is-thackathon').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.what-is-thackathon');

            $this.find('.section-title').addClass('fadeInRight');
        });
        // What is thackathon

        // When thackathon
        $('.when-thackathon').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.when-thackathon');

            $this.find('h2.section-title').addClass('fadeInLeft');
            $this.find('h3.section-title').addClass('fadeInRight');
            $this.find('h4.section-title').addClass('fadeInUp');
        });
        // When thackathon

        // Program
        $('.program').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.program');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');
        });
        // Program

        // Awards
        $('.awards').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.awards');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');

            $this.find('#sub-section-column1').css('opacity', 1).addClass('bounceInDown');
            $this.find('#sub-section-column2').css('opacity', 1).addClass('bounceLeft');
            $this.find('#sub-section-column3').css('opacity', 1).addClass('bounceIn');
            $this.find('#sub-section-column4').css('opacity', 1).addClass('bounceInRight');
        });
        // Awards

        // Must Know
        $('.must-know').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.must-know');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');
        });

        $('#know-item1').appear().on('appear', function(event, $all_appeared_elements) {
            $('#know-item1').addClass('bounceInLeft').css('opacity', 1);
        });
        $('#know-item2').appear().on('appear', function(event, $all_appeared_elements) {
            $('#know-item2').addClass('bounceInRight').css('opacity', 1);
        });
        $('#know-item3').appear().on('appear', function(event, $all_appeared_elements) {
            $('#know-item3').addClass('bounceInLeft').css('opacity', 1);
        });
        $('#know-item4').appear().on('appear', function(event, $all_appeared_elements) {
            $('#know-item4').addClass('bounceInRight').css('opacity', 1);
        });
        $('#know-item5').appear().on('appear', function(event, $all_appeared_elements) {
            $('#know-item5').addClass('bounceInLeft').css('opacity', 1);
        });
        // Must Know

        // Apply Now Banner
        $('.apply-now-banner').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.apply-now-banner');

            $this.find('h2.section-title').addClass('fadeInLeft');
            $this.find('h3.section-title').addClass('fadeInRight');
            $this.find('h4.section-title').addClass('fadeInUp');
        });
        // Apply Now Banner

        // Must do
        $('.must-do').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.must-do');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');

            $this.find('#sub-section-column1').css('opacity', 1).addClass('bounceInLeft');
            $this.find('#sub-section-column2').css('opacity', 1).addClass('bounceIn');
            $this.find('#sub-section-column3').css('opacity', 1).addClass('bounceInRight');
        });
        // Must do

        // Sponsors
        $('.sponsors').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.sponsors');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');
        });
        // Sponsors

        // Apply Form
        $('.apply-form').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.apply-form');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');
        });
        // Apply Form

        // Contact us
        $('.contact-us').appear().on('appear', function(event, $all_appeared_elements) {
            var $this = $('.contact-us');

            $this.find('.section-title').addClass('fadeInRight');
            $this.find('.section-description').addClass('fadeInLeft');
        });
        // Contact us


    // Custom Effects


    // Apply Form
    var teamCheckBox = $('#team');
    teamCheckBox.iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square',
        increaseArea: '20%' // optional
    });

    teamCheckBox.on('ifChecked', function(event) {
        $('#isTeam').slideDown(200);
    });

    teamCheckBox.on('ifUnchecked', function(event) {
        $('#isTeam').find('input').val('');
        $('#isTeam').slideUp(200);
    });

    var last_i = 0;
    $('#team_count').keyup(function() {
        var maxInteger = 5;

        var getInteger = $(this).val();
        getInteger = parseInt(getInteger);

        if (getInteger > maxInteger) {
            $('.apply-form-result').html('');
            $('.apply-form-result').fadeIn(100).html('<div class="danger">Bir Ekipte Maximum <b>' + maxInteger + '</b> KiÅŸi Olabilir</div>');
        } else {
            $('.apply-form-result').html('');
        }

        // Add
        var addInputHTML;

        var countAllInputs = $('.team-infos-inputs').length;

        if (getInteger == countAllInputs || getInteger > maxInteger) {

            return false;

        } else {

            for (i = 1; i < getInteger - countAllInputs + 1; i++) {

                last_i = last_i + 1;

                addInputHTML = ''
                + '   <div class="team-infos-inputs" id="clone-id-'+last_i+'">'
                + '       <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 input-row">'
                + '           <input type="text" name="team_names[]" placeholder="'+last_i+'. Ä°sim Soyisim">'
                + '       </div>'
                + '       <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 input-row">'
                + '           <input type="text" name="team_emails[]" placeholder="'+last_i+'. E-Posta Adresi">'
                + '       </div>'
                + '   </div>';

                $('#team-infos-clone').append(addInputHTML);

            }

        }
        // Add

        // Remove
        if (countAllInputs > getInteger) {

            for (i = countAllInputs; i > countAllInputs - getInteger + 1; i--) {

                console.log(i);

                last_i = last_i - 1;
                $('#clone-id-'+i).remove();

            }

        }
        // Remove
    });

    // Apply Register Proccess
    applySubmited = 0;
    $('.apply-now-form button').click(function() {

        if (!applySubmited) {
            applySubmited = 1;

            $('.apply-form-result').html('<div class="success">GÃ¶nderiliyor...</div>');

            var name_surname = $('.apply-now-form #name_surname').val();
            var email = $('.apply-now-form #email').val();
            var corporate = $('.apply-now-form #corporate').val();
            var branch = $('.apply-now-form #branch').val();

            if (name_surname && email && corporate && branch) {
                $.ajax({
                    type: "post",
                    url: $(this).parents('form').attr('action'),
                    data: $(this).parents('form').serialize(),
                    success: function(response) {
                        if(!response.success) {
                            applySubmited = 0;
                        }
                        $('.apply-form-result').html('');
                        $('.apply-form-result').fadeIn(100).html(response.message);
                    }
                });
            } else {
                applySubmited = 0;
                $('.apply-form-result').fadeIn(100).html('<div class="danger">LÃ¼tfen Zorunlu AlanlarÄ± Doldurun.</div>');
            }
        }

        return false;
    });
    // Apply Register Proccess
    // Apply Form

    // Links
    $('.goToApplyNowSection').on('click', function() {
        var getApplySectionScrollTop = parseFloat($('.apply-form').offset().top.toFixed(0));
        $('body, html').animate({ scrollTop: getApplySectionScrollTop - 100 }, 500, 'swing');
        return false;
    });

    $('.goToMustKnowSection').on('click', function() {
        var getApplySectionScrollTop = parseFloat($('.must-know').offset().top.toFixed(0));
        $('body, html').animate({ scrollTop: getApplySectionScrollTop - 100 }, 500, 'swing');
        return false;
    });
    // Links

});