document.addEventListener("click", function(e) {
    if (e.target.tagName == "A" &&
            !e.target.hasAttribute("target"))
    {
        e.target.setAttribute("target", "_blank");
    }
});