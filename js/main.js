const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Selecionar item de conteúdo da guia
function selectItem(e) {
	// Remover todas as classes de show e borda
	removeBorder();
	removeShow();
	// Adicionar borda ao item da guia atual
	this.classList.add('tab-border');
	// Pegar item de conteúdo do DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Adicionar classe de programa
	tabContentItem.classList.add('show');
}

// Remover as bordas inferiores de todos os itens da guia
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remover a classe show de todos os itens de conteúdo
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Ouvir o clique do item da guia
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
