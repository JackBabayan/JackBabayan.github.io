<?php
	define("STYLES_DIR", "public/styles");
	
	
	require("pscss/scss.inc.php");
	
	$scss = new scssc();
	$scss->setFormatter("scss_formatter_compressed");
	
	function glob_recursive($pattern, $flags = 0)
	{
		$files = glob($pattern, $flags);
		
		foreach (glob(dirname($pattern).'/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir)
		{
			$files = array_merge($files, glob_recursive($dir.'/'.basename($pattern), $flags));
		}
		
		return $files;
	}
	
	$inputFiles = glob_recursive(STYLES_DIR."/*.scss");
	
	$hashFile = STYLES_DIR."/hash.json";
	
	$hashData = json_decode(file_get_contents($hashFile), TRUE);
	
	if (!is_array($hashData)) {
		$hashData = array();
		file_put_contents($hashFile, json_encode($hashData));
	}
	
	foreach ($inputFiles AS $filePath) {
		$lastHash = "";
		if (isset($hashData[$filePath])) {
			$lastHash = $hashData[$filePath];
		}
		
		if ($lastHash == md5_file($filePath)) {
			// echo "Buhay - ".$filePath."<br />";
			continue;
		}
		else {
			// echo $filePath."<br />";
			$hashData[$filePath] = md5_file($filePath);
		}
		
		
		$outPath = str_replace(".scss", ".css", $filePath);
		$nativeCssCode = $scss->compile(file_get_contents($filePath));
		
		file_put_contents($outPath, $nativeCssCode);
	}
	
	file_put_contents($hashFile, json_encode($hashData));
	
?>