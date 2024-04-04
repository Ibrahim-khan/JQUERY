/*Hide paragraph*/
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

/*Hide paragraph with button*/
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});

/*Hide all paragraph which use class .test*/
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});

/*Hide all element using '*' */
$(document).ready(function(){
    $("#hideAllElement").click(function(){
        $("*").hide();
    });
});

                    /*Mouse over the paragraph*/
                    $(document).ready(function(){
                        $("#test1").mouseenter(function(){
                            alert("You entered Paragraph!.");
                        });
                    });

                    $(document).ready(function(){
                        $("#test2").mouseleave(function(){
                            alert("You leave paragraph!");
                        });
                    });

                    $(document).ready(function(){
                        $("#test3").hover(function(){
                            alert("You leave paragraph!");
                        },
                        function(){
                            alert("You leave paragraph too!");
                        });
                    });

        /*Focus*/
        $(document).ready(function(){
            $("input").focus(function(){
                $(this).css("background-color", "yellow");
            });
            $("input").blur(function(){
                $(this).css("background-color", "green");
            });
        });

                        /*On method()*/
                        $(document).ready(function(){
                            $("#test4").on({
                                mouseenter: function(){
                                    $(this).css("background-color", "gray");
                                },
                                mouseleave: function(){
                                    $(this).css("background-color", "blue");
                                },
                                click: function(){
                                    $(this).css("background-color", "yellow");
                                  }  
                            });
                        });


                                        /*Password Login*/
                                        $("#loginButton").click(function(){

                                            var password1 = $("#pass1").val();
                                            var password2 = $("#pass2").val();
    
                                            if(password1 != "" && password2 != ""){
                                                
                                                if(password1 == password2){
                                                    alert("Successfully Login");
                                                }else{
                                                    alert("Password mismatch")
                                                }

                                            }else {
                                                alert("Please enter password")
                                            }

                                        })

                                                /* hide() and show() button*/
                                                $(document).ready(function(){
                                                    $("#hide").click(function(){
                                                        $("#test5").hide(3000, function(){
                                                            alert("The paragraph is now hidden");
                                                        });                                                       
                                                    });

                                                    $("#show").click(function(){
                                                        $("#test5").show(3000);
                                                    });
                                                });

                                                $(document).ready(function(){
                                                    $("#toggle").click(function(){
                                                        $("#test5").toggle();
                                                    });
                                                });

                                                        /*fadeIn fadeOut fadeTo method*/
                                                        $(document).ready(function(){
                                                            $("#fadeIn").click(function(){
                                                                $("#fade1").fadeIn();
                                                                $("#fade2").fadeIn("slow");
                                                                $("#fade3").fadeIn("2000");
                                                            });
                                                        });

                                                        $(document).ready(function(){
                                                            $("#fadeOut").click(function(){
                                                                $("#fade1").fadeOut();
                                                                $("#fade2").fadeOut("slow");
                                                                $("#fade3").fadeOut("2000");
                                                            });
                                                        });

                                                        $(document).ready(function(){
                                                            $("#fadeToggle").click(function(){
                                                                $("#fade1").fadeToggle();
                                                                $("#fade2").fadeToggle("slow");
                                                                $("#fade3").fadeToggle("2000");
                                                            });
                                                        });

                                                        $(document).ready(function(){
                                                            $("#fadeTo").click(function(){
                                                                $("#fade1").fadeTo("slow", 0.15);
                                                                $("#fade2").fadeTo("slow", 0.4);
                                                                $("#fade3").fadeTo("slow", 0.7);
                                                            });
                                                        });

                                                /*JQuery Slide*/
                                                $("#stopSlide").click(function(){
                                                    $("#panel").stop();
                                                });

                                                $(document).ready(function(){
                                                    $("#flip").click(function(){
                                                        $("#panel").slideDown(5000);
                                                    });
                                                });

                                                $(document).ready(function(){
                                                    $("#flip1").click(function(){
                                                        $("#panel1").slideUp("slow");
                                                    });
                                                });
                                                $(document).ready(function(){
                                                    $("#flip2").click(function(){
                                                        $("#panel2").slideToggle("slow");
                                                    });
                                                });

                                                                /*JQuery animation*/
                                                                $(document).ready(function(){
                                                                    $("#animation").click(function(){
                                                                        $("#animation1").animate({
                                                                            left:'500px',
                                                                            opacity:'0.5',
                                                                            height: '+=100px',
                                                                            width: '+=100px'
                                                                    });
                                                                    });
                                                                });

                                                                
                                                                $(document).ready(function(){                       /*Animation Toggle*/
                                                                    $("#animationToggle").click(function(){
                                                                        $("#animation1").animate({                                                                           
                                                                            height: 'toggle'                                                                          
                                                                    });
                                                                    });
                                                                });

                                                                $(document).ready(function(){
                                                                    $("#animationSqure").click(function(){
                                                                          var div = $("#animation1");

                                                                          div.animate({height:'300px', opacity:'0.4'}, "slow");  
                                                                          div.animate({width:'300px', opacity:'0.8'}, "slow");
                                                                          div.animate({height:'100px', opacity:'0.7'}, "slow");  
                                                                          div.animate({width:'100px', opacity:'0.7'}, "slow");  
                                                                          div.animate({fontSize:'3em'}, "slow");
                                                                          div.animate({fontSize:'1em'},"slow");                                                         
                                                                    });
                                                                    });

                                                        /*Append*/                                                     
                                                        $("#append1").click(function(){
                                                            $("#text6").append("<b> Append Text</b>");
                                                        });

                                                        $("#append2").click(function(){
                                                            $("#ol1").append("<li>Append List</li>");
                                                        });

                                                        
                                                /*Remove Empty method*/
                                                $("#btnRemove").click(function(){
                                                    $("#removeEmpty").remove();
                                                });

                                                $("#btnEmpty").click(function(){
                                                    $("#removeEmpty").empty();
                                                });

                                                /*Change Background Color*/
                                                $("#changeBk").click(function(){
                                                    $("#removeEmpty").css({"background-color" : "green", "font-size":"120%"});
                                                });

                                        /*JQuery CSS add and Remove Class*/
                                        $("#addCss").click(function(){
                                            $("#CssAddRemove").addClass("blue");
                                            $("#CssAddRemove1").addClass("important");
                                        });

                                        $("#removeCss").click(function(){
                                            $("#CssAddRemove").removeClass("blue");
                                            $("#CssAddRemove1").removeClass("important");
                                        });

                                        $("#addAndRemove").click(function(){
                                            $("#CssAddRemove").toggleClass("blue");                                      
                                        });

                                /*JQuery Dimensions*/
                                $("#btnDimension").click(function(){
                                    var text1 = "";
                                    text1 += "Width of Div : " + $("#dimension").width() + "<br>";
                                    text1 += "Height of Div : " + $("#dimension").height() + "<br>";
                                    text1 += "Width with Inner : " + $("#dimension").innerWidth() + "<br>";
                                    text1 += "Height with Inner : " + $("#dimension").innerHeight() + "<br>";
                                    text1 += "Width with Outer : " + $("#dimension").outerWidth() + "<br>";
                                    text1 += "Height with Outer : " + $("#dimension").outerHeight() + "<br>";
                                    text1 += "Width with Outer (margin include) : " + $("#dimension").outerWidth(true) + "<br>";
                                    text1 += "Height with Outer (margin include) : " + $("#dimension").outerHeight(true) + "<br>";
                                    text1 += "Window Width : " + $(window).width() + "<br>";
                                    text1 += "Window Height: " + $(window).height();
                                    $("#dimension").html(text1);
                                });

                               
                         /*siblings*/
                         $("#h2").nextAll().css({"color" : "red", "border" : "2px solid red"});

                         /*JQuery AJAX*/
                         $("#loadText").click(function(){
                            $("#loadText1").load("demo_test.txt #p1");
                         });

                //Filter Table
                $("#searchTableInfo").on("keyup", function(){
                    var valueAll = $(this).val().toLowerCase();
                    $("#myTable tr").filter(function(){
                        $(this).toggle($(this).text().toLowerCase().indexOf(valueAll) > -1)
                    });

                    $("#myList li").filter(function(){
                        $(this).toggle($(this).text().toLowerCase().indexOf(valueAll) > -1)
                    });

                    $("#myDivSearch *").filter(function(){
                        $(this).toggle($(this).text().toLowerCase().indexOf(valueAll) > -1)
                    });
                });

                

                

                                                               

                                        