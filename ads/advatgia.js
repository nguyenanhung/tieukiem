		var pageOptions = {
           'webId' : 163,
           'category' : 0
         };
         
         var adblock = {
                           'adblock1' : {
            					'divIdShow' : 'adVatgia_block_1',
            					'numAd'	: 5,
            					'typeShow'	: 0,
            					'style' : {'width' : 300}
            					}
               ,               'adblock2' : {
            					'divIdShow' : 'adVatgia_block_2',
            					'numAd'	: 5,
            					'typeShow'	: 0,
            					'style' : {'width' : 300}
            					}
               ,               'adblock3' : {
            					'divIdShow' : 'adVatgia_block_3',
            					'numAd'	: 3,
            					'typeShow'	: 1,
            					'style' : {'width' : 675}
            					}
               ,               'adblock4' : {
            					'divIdShow' : 'adVatgia_block_4',
            					'numAd'	: 4,
            					'typeShow'	: 1,
            					'style' : {'width' : 990}
            					}
      		,               'adblock5' : {
            					'divIdShow' : 'adVatgia_block_5',
            					'numAd'	: 4,
            					'typeShow'	: 2,
            					'style' : {'width' : 300, 'height' : 220, 'link' : '#aaa', 'border' : '#2D81FB', 'align' : 'left'}
            					}
               				
         };
         new vatgiaAd(pageOptions, adblock).Ads();