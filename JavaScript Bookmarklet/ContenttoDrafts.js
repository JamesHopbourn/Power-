javascript: (function() {
    function copyToClipboard(text) {
        if (window.clipboardData && window.clipboardData.setData) {
            return clipboardData.setData("Text", text);
        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");
            } catch(ex) {
                console.warn("Copy to clipboar failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
    content = document.body.innerText.replace(/(推荐阅读|喜欢此内容的人还喜欢)(.*\n)+/g, "").replace(/.*阅读原文.*/g,'').replace(/[\r\n]{3,}/g, "\n\n");
    if (window.location.host = 'mp.weixin.qq.com'){
    content = content.split('\n');
    content[0] = content[0] + ' ' + document.getElementsByTagName("META")[8].content;
    for (var i = content.length - 5; i < content.length; i++) {
      content[i] = content[i].replace(/^-*(end|END|)-*/, '');
      content[i] = content[i].replace(/^·*(end|END|)·*/, '');
    }
    content = content.join('\n');
    }
    copyToClipboard(content + "\n" + '[' + document.title.replace(/ \/ Twitter/, '').replace(/^【.*】/, '').replace(/(｜.*$|\|.*$)/, '').replace(/^\(.*\)/, '').replace(/-.*$/, '').replace(/(！|？|\?|\!)/g, '').replace(/_.*$/, '').trim() + '](' + window.location.href + ')');
    url = 'drafts4://x-callback-url/runAction?action=paste';
    window.open(url,'_self');
  })();