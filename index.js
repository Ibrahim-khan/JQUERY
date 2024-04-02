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
                                                        $("#test5").hide(1000);
                                                    });

                                                    $("#show").click(function(){
                                                        $("#test5").show(1000);
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
                                                $(document).ready(function(){
                                                    $("#flip").click(function(){
                                                        $("#panel").slideDown("slow");
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


                                        