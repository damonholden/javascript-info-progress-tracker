function checkSpam(string) {
	const lowercasedString = string.toLowerCase();
	if (lowercasedString.includes('viagra') || lowercasedString.includes('xxx')) {
		return true;
	} else {
		return false;
	}
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
