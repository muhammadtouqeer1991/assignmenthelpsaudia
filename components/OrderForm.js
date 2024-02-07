"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import formbottm from '../public/assets/formbottm.png';
import moment from 'moment';
import Moment from 'react-moment';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';
import Swal from 'sweetalert2';

const OrderForm = () => {

const { push } = useRouter();

const NameGet = typeof localStorage !== 'undefined' ? localStorage.getItem('Name') : null;
const EmailGet = typeof localStorage !== 'undefined' ? localStorage.getItem('Email') : null;
const pagesGet = typeof localStorage !== 'undefined' ? localStorage.getItem('pages') : null;
const academicGet = typeof localStorage !== 'undefined' ? localStorage.getItem('academic') : null;
const deadlineGet = typeof localStorage !== 'undefined' ? localStorage.getItem('deadline') : null;
const AmountGet = typeof localStorage !== 'undefined' ? localStorage.getItem('Amount') : null;
const MessageGet = typeof localStorage !== 'undefined' ? localStorage.getItem('Message') : null;

const [LoadingS,setLoadingS]=useState(false);
const [document,setDocument]=useState('');
const [Styles,setStyles]=useState('');
const [Topic,setTopic]=useState('');
const [papertype,setPapertype]=useState('');
const [pages,setPages]=useState('');
const [academic,setAcademic]=useState('');
const [deadline,setDeadline]=useState('');
const [subject,setSubject]=useState('');
const [style,setStyle]=useState('');
const [details,setDetails]=useState('');
const [email,setEmail]=useState('');
const [country,setCountry]=useState('Saudi Arabia');
const [phone,setPhone]=useState('');
const [Amount,setAmount]=useState('0');
const [name,setName]=useState('');

const [Upload1,setUpload1]=useState('');
const [Upload2,setUpload2]=useState('');
const [Upload3,setUpload3]=useState('');

const changeUpload1Handler = (event) => {
    setUpload1(event.target.files[0]);
};

const changeUpload2Handler = (event) => {
    setUpload2(event.target.files[0]);
};

const changeUpload3Handler = (event) => {
    setUpload3(event.target.files[0]);
};

useEffect(() => {
setName(NameGet);
setEmail(EmailGet);
setAcademic(academicGet);
setPages(pagesGet);
setDeadline(deadlineGet);
setAmount(AmountGet == null || AmountGet == '' ? 0 : AmountGet);
},[NameGet,EmailGet,pagesGet,academicGet,deadlineGet,AmountGet]);

useEffect(() => {
    getData(pages,academic,deadline);
},[pages,academic,deadline]);

const getData = async (pages,academic,deadline) => {
    const query = await fetch(`https://assignmenthelp.sa.com/priceChange.php?pages=${pages}&academic=${academic}&deadline=${deadline}`);
    const response = await query.json();
    setAmount(response);
}

const orderSubmit =  (e) => {
e.preventDefault();
setLoadingS(true);

const formData = new FormData();

formData.append('document',document);
formData.append('papertype',papertype);
formData.append('pages',pages);
formData.append('academic',academic);
formData.append('deadline',deadline);
formData.append('subject',subject);
formData.append('style',style);
formData.append('details',details);
formData.append('email',email);
formData.append('country',country);
formData.append('phone',phone);
formData.append('Amount',Amount);
formData.append('name',name);
formData.append('Upload1',Upload1);
formData.append('Upload2',Upload2);
formData.append('Upload3',Upload3);

const requestOptions = {
method: 'POST',
body: formData
};

fetch(`https://assignmenthelp.sa.com/orderForm.php`, requestOptions)
.then(response => response.json())
.then(dataex => {
    console.log("dataex",dataex);
if(dataex.code == '200'){
Swal.fire(
'Good job!',
dataex.message,
'success'
);
setLoadingS(false);
push('/');
typeof localStorage !== 'undefined' ? localStorage.clear() : null;
}else{
Swal.fire(
'Warning',
dataex.message,
'danger'
);
}


});

}

return (
<>
{LoadingS == true ? <LoadingSpinner /> : '' }
<div className='py-7 bg-topbarcolor'>
<div className="container mx-auto text-center">
<h1 className='text-[45px] font-bold text-white'>Fill Out The Order Form</h1>
<hr className='w-[190px] mx-auto h-[1px] bg-navactive border-navactive' />
<div className='border-navactive rounded-[20px] border-2 mt-5'>
<div className='flex justify-between py-10 px-10 gap-10'>
<div className='w-[60%]'>
<form onSubmit={orderSubmit} encType='multipart/from-data'>
<div className='flex gap-3 justify-between pt-2'>
<select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="papertype" onChange={e=>setPapertype(e.target.value)} value={papertype}>
<option value="">Select Paper Type</option>
<option value="Essay">Essay</option>
<option value="Coursework">Coursework</option>
<option value="Assignment">Assignment</option>
<option value="Dissertation">Dissertation</option>
<option value="Thesis">Thesis</option>
<option value="Research Proposal">Research Proposal</option>
<option value="Literature Review">Literature Review</option>
<option value="Case Study">Case Study</option>
<option value="Report">Report</option>
<option value="Editing and Proofreading">Editing and Proofreading</option>
<option value="PowerPoint Slides">PowerPoint Slides</option>
<option value="Others">Others</option>
</select>
<select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="styles" onChange={e=>setStyles(e.target.value)} value={Styles} required>
<option value="">Select Referencing Style</option>
<option value="APA">APA</option>
<option value="MLA">MLA</option>
<option value="HARVARD">HARVARD</option>
<option value="CHICAGO">CHICAGO</option>
<option value="TURABIAN">TURABIAN</option>
<option value="OXFORD">OXFORD</option>
<option value="OSCOLA">OSCOLA</option>
<option value="VANCOUVER">VANCOUVER</option>
<option value="Others">Other</option>
</select>
</div>
<div className='flex gap-3 justify-between pt-2'>
<select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="academic" onChange={e=>setAcademic(e.target.value)} value={academic} required>
<option value="">Please Select</option>

<option value="high-school">High School</option>

<option value="College">College</option>

<option value="Undergraduate">Undergraduate</option>

<option value="Master">Masters</option>

<option value="PhD">Ph.D</option>

<option value="Admission">Admission</option>
</select>
<select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="subject" onChange={e=>setSubject(e.target.value)} value={subject}>
<option value="" selected="">Select Subject</option>
<option value="Accounting">Accounting</option>
<option value="Administration">Administration</option>
<option value="Anthropology">Anthropology</option>
<option value="Application-Letters">Application Letters</option>
<option value="Art-and-Architecture">Art and Architecture</option>
<option value="Biology">Biology</option>
<option value="Business">Business</option>
<option value="Chemistry">Chemistry</option>
<option value="Child-Care">Child Care</option>
<option value="Classic-English-Literature">Classic English Literature</option>
<option value="Communications">Communications</option>
<option value="Computer-Science">Computer Science</option>
<option value="Database-Management">Database Management</option>
<option value="Economics">Economics</option>
<option value="Education">Education</option>
<option value="Electronics">Electronics</option>
<option value="Engineering">Engineering</option>
<option value="Family-and-Consumer-Science">Family and Consumer Science</option>
<option value="Film-and-Theatre-Studies">Film and Theatre Studies</option>
<option value="Finance">Finance</option>
<option value="Geography">Geography</option>
<option value="Government-and-Politics">Government and Politics</option>
<option value="History">History</option>
<option value="Hospitality">Hospitality</option>
<option value="Human-Resource">Human Resource</option>
<option value="Law">Law</option>
<option value="Management">Management</option>
<option value="Marketing">Marketing</option>
<option value="Mathematics">Mathematics</option>
<option value="Matlab">Matlab</option>
<option value="Mechanical">Mechanical</option>
<option value="Medical-and-Nursing">Medical and Nursing</option>
<option value="Media-Studies">Media Studies</option>
<option value="Music">Music</option>
<option value="Natural-Therapies">Natural Therapies</option>
<option value="Philosophy">Philosophy</option>
<option value="Physics">Physics</option>
<option value="Programming-Language">Programming Language</option>
<option value="Project-Management">Project Management</option>
<option value="Psychology">Psychology</option>
<option value="Public-Relations">Public Relations</option>
<option value="Real-Estate">Real Estate</option>
<option value="Recruitment">Recruitment</option>
<option value="Religion">Religion</option>
<option value="Science">Science</option>
<option value="Social-Science">Social Science</option>
<option value="Sociology">Sociology</option>
<option value="Sport-Science">Sport Science</option>
<option value="Statistics">Statistics</option>
<option value="Strategy-and-Planning">Strategy and Planning</option>
<option value="Theatre">Theatre</option>
<option value="Tourism">Tourism</option>
<option value="World-Literature">World Literature</option>
<option value="Zoology">Zoology</option>
<option value="Other">Other</option>
</select>
</div>
<div className='flex gap-3 justify-between pt-2'>
<input type="text" name="Topic" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' placeholder='Enter Topics' onChange={e=>setTopic(e.target.value)} value={Topic}  />
</div>
<div className='flex gap-3 justify-between pt-2'>
<textarea name="details" id="details" cols="30" rows="5" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' placeholder='Enter Paper Instruction' onChange={e=>setDetails(e.target.value)} value={details} required></textarea>
</div>

<div className='flex gap-3 justify-between pt-2'>
<select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="pages" onChange={e=>setPages(e.target.value)} value={pages} required>
<option>Select No of Pages</option>
{Array(200).fill(1).map((el, i) =>
<option key={i+1} value={i+1}>{i+1} Page(s) / {i+1 * 250} Words</option>
)}
</select>
<select className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' name="deadline" onChange={e=>setDeadline(e.target.value)} value={deadline} required>
<option value="">Select Deadline</option>
<option value="20">20 Days / {moment().add(20, 'd').format('D MMM, YYYY')}</option>
<option value="15">15 Days / {moment().add(15, 'd').format('D MMM, YYYY')}</option>
<option value="10">10 Days / {moment().add(10, 'd').format('D MMM, YYYY')}</option>
<option value="7">7 Days / {moment().add(7, 'd').format('D MMM, YYYY')}</option>
<option value="6">6 Days / {moment().add(6, 'd').format('D MMM, YYYY')}</option>
<option value="5">5 Days / {moment().add(5, 'd').format('D MMM, YYYY')}</option>
<option value="4">4 Days / {moment().add(4, 'd').format('D MMM, YYYY')}</option>
<option value="3">3 Days / {moment().add(3, 'd').format('D MMM, YYYY')}</option>
<option value="2">2 Days / {moment().add(2, 'd').format('D MMM, YYYY')}</option>
<option value="24h">24 Hours / {moment().add(24, 'h').format('D MMM, YYYY')}</option>
<option value="12h">12 Hours / {moment().add(12, 'h').format('D MMM, YYYY')}</option>
<option value="6h">6 Hours / {moment().add(6, 'h').format('D MMM, YYYY')}</option>
</select>
</div>

<div className='flex gap-3 justify-between pt-4'>
<input type="file" name='upload1' className='text-white' onChange={changeUpload1Handler}  />
<input type="file" name='upload2' className='text-white' onChange={changeUpload2Handler}  />
<input type="file" name='upload3' className='text-white' onChange={changeUpload3Handler}  />
</div>
<div className='flex gap-3 justify-center pt-5'>
<h4 className='text-[2rem] text-center text-navactive font-bold'>Personal Details</h4>
</div>

<div className='flex gap-3 justify-between pt-2'>
<input type="text" placeholder='Enter Full Name' name="name" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' onChange={e=>setName(e.target.value)} value={name} required  />
<input type="email" placeholder='Enter Email Address' name="email" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' onChange={e=>setEmail(e.target.value)} value={email} required  />
</div>

<div className='flex gap-3 justify-between pt-2'>
<select name="country" id="" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' required="" onChange={e=>setCountry(e.target.value)} value={country}>
<option value="Afghanistan">Afghanistan</option>
<option value="Åland Islands">Åland Islands</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antarctica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cote D'ivoire">Cote Divoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guernsey">Guernsey</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-bissau">Guinea-bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard Island and Mcdonald Islands">Heard Island and McdonaldIslands</option>
<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Isle of Man">Isle of Man</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jersey">Jersey</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Korea, Democratic Peoples Republic of">Korea, Democratic Peoples Republic of</option>
<option value="Korea, Republic of">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao Peoples Democratic Republic">Lao Peoples Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macao">Macao</option>
<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
<option value="Moldova, Republic of">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russian Federation">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Helena">Saint Helena</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia" selected>Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syrian Arab Republic">Syrian Arab Republic</option>
<option value="Taiwan, Province of China">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania </option>
<option value="Thailand">Thailand</option>
<option value="Timor-leste">Timor-leste</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Viet Nam">Viet Nam</option>
<option value="Virgin Islands, British">Virgin Islands, British</option>
<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
<option value="Wallis and Futuna">Wallis and Futuna</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>
<input type="text" placeholder='Enter Phone No' name="phone" className='flex-1 py-4 rounded-[10px] px-4 bg-navcolor border-navactive border-2 text-white' onChange={e=>setPhone(e.target.value)} value={phone} required  />
</div>
<div className='flex gap-3 justify-between pt-2'>
<h6 className='text-[1.5rem] text-white'>Total Amount: <b> SAR {Amount}</b></h6>
</div>
<div className='flex gap-3 justify-between pt-2'>
<p className='text-[17px] text-white'><input type="checkbox" /> I have accepted your Terms & Conditions</p>
</div>
<div className='flex gap-3 justify-between pt-2'>
<button type='submit' className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</button>
</div>




</form>
</div>
<div className='w-[40%]'>
<div class="ordersummary">
<h3>Your order summary</h3>

<hr />

<div class="academic_paper">
<h4 className='text-left'>Academic paper writing</h4>
<ul className='text-left'>
<li>Type of Paper: <span class="float-right" id="PaperTypedata">{papertype}</span></li>
<li>Subject: <span class="float-right" id="SubjectData">{subject}</span></li>
</ul>
</div>
<div class="basic_price pt-2">
<h4 className='text-left'>Basic Price</h4>

<ul className='text-left'>
<li>Academic Level: <span class="float-right" id="AcademicLevel">{academic}</span></li>
<li>Deadline: <span class="float-right" id="DeadlineData">{moment().add(deadline, 'd').format('D MMM, YYYY')}</span></li>
<li class="pb-3">Pages:  <span id="NoFPages" style={{float:'right'}}>{pages == null || pages == '' ? '' : `${pages} Page(s) / ${pages * 250} Words`}</span> </li>
<li class="borderdata pt-2"><b>Total:</b><span style={{float:'right'}}>SAR <span id="originalprice" >{Amount}</span></span></li>

</ul>
<Image src={formbottm} alt="formbottm" />


</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
)
}

export default OrderForm