import './index.scss'
import teacher from '../../assets/images/Courses/teacher.png'
import price from '../../assets/images/Courses/price.png'
import timeStart from '../../assets/images/Courses/timeStart.png'
import student from '../../assets/images/Courses/student.png'
import opacity from '../../assets/images/Courses/opacity.png'
import duringCourse from '../../assets/images/Courses/duringCourse.png'
import reactSingle from '../../assets/images/Courses/reactSingle.png'
import { CourseDeatial } from '../../components/DeatilsCourse'
import { Comments } from '../../components/Comments'


const CourseDetail = () => {

    const deatils = [{
        name: 'ری اکت',
        describe: 'یک کتابخانه جاوا اسکریپتی است که برای ساخت یوزر اینترفیس یا همان رابط کاربری مورد استقاده قرار میگیرد. همه ی این المانهای در این React صفحه کنارهم برای ما رابط کاربری را تشکیل میدهند. (یوزر اینترفیس (رابط کاربری) چیزیکه با کاربر در ارتباط است).کاربرد ری اکت این است که یوزر این قابلیت را دارد که برای ما یوزر اینترفیس ها React اینترفیس را برای ما با یک سری ویژگی های خاص میسازد.یکی از مهم ترین ویژگی ها این است که یا رابط های کاربری را با سرعت بالا بسازد. مسلما سرعت بالای هر وبسایت می تواند در جذب کاربر تاثیر داشته باشد. پس تا به اینجا همان طور که گفتم ری اکت یک کتابخانه جاوا اسکریپتی برای ساخت رابط کاربری با سرعت بالاست. اینستاگرام به تنهایی میتواند یک وزنه ی سنگین برای معرفی ری اکت نیوتیو باشد که از این کتابخانه استفاده میکند.'
    },
    {
        work: 'ری اکت',
        describe: 'اگر یک سری به وبسایت های کارگاهی بزنیم با یک سرچ ساده بسیاری از آنها را می توان پیدا کنیم. کمتر درخواستی را میبینید که در زمینه فرانت برنامه نویس، اسمی از ری اکت نبرده باشد. همینطور با توجه به ویژگی هایی که در رابطه با این فریم ورک در ادامه با شه شما معرفی خواهم کرد. که توجه مورد علاقه شرکت های بزرگ است. پس اگر میخواهید فرصت شغلی تان را در زمینه فرانت افزایش دهید حتما ری کت را یاد بگیرید و رزومه تان را با این کتابخانه ی قدرتمند سنگین تر کنید.'
    },
    {
        end: 'سخن پایانی',
        describe: 'در این توضیحات سعی کردم یکی دیگر از علوم برنامه نویسی را به شما معرفی کنم. پیش نیاز های یادگیری و کاربردهای ری اکت به شما عزیزان ارائه شد. ری اکت در چندسال اخیر نقش مهمی در پیشرفت کار خیلی از برندها داشت و بازار کار بسیار مناسبی دارد. اگر علاقه منداید در این زمینه فعالیت کنید و امنیت مالی خوبی داشته باشید توصیه مبکنم آموزش دراین حوزه را شروع کنید. تیم قوی و حرفه ای کدیاد در خدمت شما عزیزان است در این زمینه به تسلط کافی و لازم برسید. برای دریافت آموزش ها کافی ست به صفحه اصلی سایت مراجعه کنید.'
    }
    ]

    const comments = [{
        name: 'mohamad',
        date: '25 اردیبهشت 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
    },
    {
        name: 'amir',
        date: '25 مهر 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
        idParent: true
    },
    {
        name: 'jafar',
        date: '25 مهر 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
        idParent: true
    },
    {
        name: 'amir hosein',
        date: '25 اردیبهشت 1401',
        describe: 'توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ',
    },
    ]

    return (
        <>
            <div className='aboutCourse'>
                <div className='informCourse'>
                    <p> دوره کامل آموزش  React JS  </p>
                    <hr></hr>
                    <div className='information'>
                        <div className='teacher'>
                            <img src={teacher} />
                            <span>دکتر محمدبحرالعلوم</span>
                        </div>
                        <div className='duringCourse'>
                            <img src={duringCourse} />
                            <span>مدت دوره:
                                <span>05:30 (17ویدئو)</span>
                            </span>
                        </div>
                        <div className='opacity'>
                            <img src={opacity} />
                            <span>ظرفیت دوره:
                                <span>40 نفر</span>
                            </span>
                        </div>
                        <div className=' numberStudent'>
                            <img src={student} />
                            <span>دانشجویان دوره:
                                <span>23 نفر</span>
                            </span>
                        </div>
                        <div className='timeStart'>
                            <img src={timeStart} />
                            <span>زمان شروع:
                                <span>12 شهریور 1401</span>
                            </span>
                        </div>
                        <div className='price'>
                            <img src={price} />
                            <span>شهریه دوره:
                                <span>500,000 </span>
                                تومان
                            </span>
                        </div>
                    </div>
                </div>
                <div className='photoCourse'>
                    <img src={reactSingle} />
                    <span className='offCourse'>
                        <span className='offCount'>25%</span>
                        <span className='offTitle'>تخفیف هزینه دوره</span>
                    </span>
                </div>
            </div>
            <CourseDeatial deatils={deatils} />
            <Comments comments={comments} />

        </>
    );
}
export { CourseDetail }