/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-05 11:47:57
 */
/**
 * @param {下载链接} url require
 * @param {传递参数} data require
 * @param {文件类型} fileType default 
 */
export function exportFile(url, data, fileType) {
    const type = fileType || data?.type || "xlsx"; // 指定导出文件类型
    const fileName = `${data?.fileName}`;
    const { method = "post" } = data;

    return new Promise(async (resolve, reject) => {
        try {
            const params =
                method === "get"
                    ? {
                        method,
                        url: baseURL + url,
                        responseType: "blob",  //  blob/arraybuffer
                        params: data
                    }
                    : {
                        method,
                        url: baseURL + url,
                        responseType: "blob",
                        data: data
                    };
            const res = await axios(params);
            Vue.prototype.$load.close();
            resolve(res);
            const content = res.data;
            const blob = new Blob([content]);
            if ("download" in document.createElement("a")) {
                // 非IE下载
                const elink = document.createElement("a");
                elink.download = `${fileName}.${type}`;
                elink.style.display = "none";
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
            } else {
                // IE10+下载
                navigator.msSaveBlob(blob, `${fileName}.${type}`);
            }
        } catch (error) {
            reject(error);
        }
    })
}

// 根据文件流下载文件
export function downloadByData(data, filename, mime, bom) {
    var blobData = typeof bom !== 'undefined' ? [bom, data] : [data];
    var blob = new Blob(blobData, { type: mime || 'application/octet-stream' });
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var blobURL = window.URL.createObjectURL(blob);
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename);
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
    }
}