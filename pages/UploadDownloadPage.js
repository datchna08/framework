exports.UploadDownloadPage = 
class UploadDownloadPage{
    /**
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.pageHeading = page.getByRole('heading',{name:'Upload and Download'})
        this.chooseFile = page.locator('#uploadFile')
        this.uploadedFilePath = page.locator('#uploadedFilePath')
        this.downloadButton = page.getByRole('button',{name:'Download'})
    }
    async pageNavigation(){
        await this.page.goto('https://demoqa.com/upload-download')
    }
    async uploadFile(filePath){
        await this.chooseFile.setInputFiles(filePath)
    }
    async downloadFile(){
        await this.downloadButton.click()
    }
}