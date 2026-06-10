const xhr=new XMLHttpRequest()
xhr.open('GET','data.txt',true)
xhr.onprogress=function()
{
    console.log('data loading...')

}
xhr.onload=function()
{
    console.log(this.responseText)
}
xhr.send()