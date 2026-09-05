const {test,expect} = require('@playwright/test')
const { UploadDownloadPage } = require('../pages/UploadDownloadPage')
test('file download',async({page})=>{
    const uploadDownloadPage = new UploadDownloadPage(page)
    await uploadDownloadPage.pageNavigation()
    await expect(uploadDownloadPage.pageHeading).toBeVisible()
    await uploadDownloadPage.uploadFile('test-data/uploadFiles/testFile.txt')
    await expect(uploadDownloadPage.uploadedFilePath).toContainText('testFile')
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        uploadDownloadPage.downloadFile()
    ])
    const fileName = await download.suggestedFilename()
    console.log(fileName)
    await expect(fileName).toContain('sampleFile')
    await download.saveAs(`test-data/downloads/${fileName}`)

})