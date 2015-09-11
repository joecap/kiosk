// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// Copyright 2015 Azurele Inc


var videoModel = (function ($) {
	var my = {};
	var privateVariable;
	function privateMethod() {
		// ...
	};

	my.vidlist = [
        "B3D05vb7y1Y",
        "SHXK1MCN5Ik",
        "J1e5NzbWqTQ",
        "Zsm-vVlRjYg",
        "4ohteBlmRJA",
        "kgtgbEu9jtM",
        "JuCNKoS3M0s",
        "S_fFMdmrSxI",
        "ecm9kXP_9Es",
        "tch_VBC8AP4",
        "V0Ao_XFvD2s",
        "FHSPkbwE-dc",
        "X3pwpzJH6fs",
        "aEE1IxJ2DUw",
        "MW1sHikNWjQ",
        "ZTTXf630alI",
        "lVTy8hnhcig",
        "xiMOssYNRZE",
        "j7_eBa2ObAc",
        "NA4Di5ELtdU"
    ];
	my.selectedVideo = my.vidlist[0];


	return my;
}(jQuery));
