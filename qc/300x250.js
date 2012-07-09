/*
Random images by Tiêu Kiếm
Domain: http://phimhp.com/
*/
function random_imglink(){
  var banner=new Array()
  //list link banner - 300x250
	banner[1] = "http://1.bp.blogspot.com/-1tbRk3rLEgo/T_rDWCuKviI/AAAAAAAAF1A/TTAUyPTQdIk/s1600/Right-Banner_02.gif"
	banner[2] = "http://2.bp.blogspot.com/-9zDCB71z818/T_rDPRpJOvI/AAAAAAAAF0I/TKMr82FAypQ/s1600/Comment-Banner_01.gif"
	banner[3] = "http://2.bp.blogspot.com/-MBWZNIvfluk/T_rDQZA2gAI/AAAAAAAAF0Q/8BxzPOF87ao/s1600/Comment-Banner_02.gif"
	banner[4] = "http://1.bp.blogspot.com/-NuuaKLrgjmo/T_rDUXQp1aI/AAAAAAAAF0w/OzPBoMm2x9s/s1600/Cute-Girl_04.gif"
	banner[5] = "http://3.bp.blogspot.com/-wYoQ6JWrOF4/T_rDRIk257I/AAAAAAAAF0Y/P3zDvrvXiD0/s1600/Cute-Girl_01.gif"
	banner[6] = "http://4.bp.blogspot.com/-ANlNy-NhVGA/T_rDVignjAI/AAAAAAAAF04/3HJ4qBHmCZA/s1600/Cute-Girl_05.gif"
	
  //list link
  var imagelinks=new Array()
  imagelinks[1]="mailto:admin@phimhp.com"
  imagelinks[2]="mailto:admin@phimhp.com"
  imagelinks[3]="mailto:admin@phimhp.com"
  imagelinks[4]="mailto:admin@phimhp.com"
  imagelinks[5]="mailto:admin@phimhp.com"
  imagelinks[6]="mailto:admin@phimhp.com"
  
  var ry=Math.floor(Math.random()*banner.length)

  if (ry==0)
     ry=1
     document.write('<a target="_blank" href='+'"'+imagelinks[ry]+''+'"'+'><img width="300px" height="250px" src="'+banner[ry]+'" border="0"></a>')
}
  random_imglink();
