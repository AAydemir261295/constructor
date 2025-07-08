class MyPage {
    constructor(pageData, router, domInteractions, csrf) {
        this.router = router;
        this.csrf = csrf;
        this.domInteractions = domInteractions;
        this.pageData = pageData;
        this.domInteractions.setStylez(pageData.stylez);
    }

    router;
    pageData;
    domInteractions;


    container;


    anchorParents = {};
    pageAnchors = {};


    async render() {
        var data = await this.domInteractions.render(this.pageData);
        this.container = data.container;
        this.anchorParents = data.anchorParents;
        this.pageAnchors = data.pageAnchors;
        this.showPage();
    }

    async nestedRedirect(anchorType, anchorName) {
        await this.domInteractions.
            changeAnchorContent(
                this.pageData,
                this.anchorParents,
                this.pageAnchors,
                this.pageData.activeAnchor,
                anchorType,
                anchorName);
    }

    showPage() {
        this.container.classList.remove("hidden");
        this.container.style.animation = "show 0.1s linear forwards";
    }

}

export default MyPage