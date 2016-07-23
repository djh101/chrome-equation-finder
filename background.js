function resetDefaultSuggestion(){
	chrome.omnibox.setDefaultSuggestion({
		description: 'Search Equations'
	});
}
resetDefaultSuggestion();

function eqnsearch(eqn){
	
}

chrome.omnibox.onInputChanged.addListener(function(text){
	
;})

chrome.omnibox.onInputEntered.addListener(function(text){
	
;})
