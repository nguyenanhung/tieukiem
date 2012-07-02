var cucre27_mp=0;
			function SVIT_ADS_GetCookie(Name){
				var re=new RegExp(Name+"=[^;]+", "i");
				if (document.cookie.match(re)) 
					return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]); 
				return ""
			}

			function SVIT_ADS_SetCookie(name, value, days){
				if (typeof days!="undefined"){ 
					var x= new Date().getTime() + days;
					var expireDate = new Date()
					expireDate.setTime(x)
					document.cookie = name+"="+decodeURIComponent(value)+"; expires="+expireDate.toUTCString()
				}
				else document.cookie = name+"="+decodeURIComponent(value);
			}

			function vtlai_popup()
			{
							   
					var cookie_popup_ads = SVIT_ADS_GetCookie('cucre27_mp_popup_ads');
					if (cookie_popup_ads=='') {
					   if(cucre27_mp==0)
						{
							cucre27_mp=1;
							var Time_expires = 60*60*6*1000;
								SVIT_ADS_SetCookie('cucre27_mp_popup_ads','true',Time_expires);
							var params = 'scrollbars=yes,fullscreen=yesstatus=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1';
							var vtlai_popup_1 = window.open('http://www.cucre.vn/vn/popup.html?utm_source=phimhp.com&utm_medium=popup&utm_campaign=ht', 'vtlai_popup_1');
							window.focus();
						}
					}
			}