import logo from "@/public/11.png"
import Image from "next/image"
import landingPic from "@/public/0.png"
import second from "@/public/2.png"
export default function page() {
  return (
    <main>
      <div className=" w-full bg-orange-100 px-10 py-10 flex-col">
        <div className="flex w-full h-16 border border-gray-600 rounded-full  items-center justify-between">
          <div className="ml-4">
            <Image className="w-24" src={logo} alt="logo"></Image>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-600">HOME</p>
            <p className="text-gray-600">RECIPES</p>
            <p className="text-gray-600">COOKING TIPS</p>
            <p className="text-gray-600">ABOUT US</p>
          </div>
          <div className="flex mr-4">
            <p className="flex bg-black p-2 text-white rounded-full">Subsucribe</p>
          </div>
        </div>
        <div className="w-full bg-orange-100 px-10 py-10 justify-center  border border-gray-600 rounded-3xl mt-4">
          <div className="flex justify-center items-center flex-col">
            <p className="text-white bg-red-600 px-3 py-1 rounded-full">RECIPE</p>
            <p className="flex text-center text-7xl font-bold">LEMON GARLIC<br />ROASTED CHICKEN</p>
            <p className="w-96 mt-10">Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience – our Citrus Infusion Delight: Lemon Garlic Roasted Chicken</p>
            <div className="flex mt-10 gap-10">
              <p className="font-bold text-xl">1 HOUR</p>
              <p className="font-bold text-xl">HARD PREP</p>
              <p className="font-bold text-xl">4 SERVES</p>
            </div>
            <div className="mt-10">
              <Image src={landingPic} alt="landing pic"></Image>
            </div>
            <div className="flex w-full mt-10">
            </div>
            <div className="flex mt-10 ml-20">
              <div>
                <p className="w-3/4" >Picture succulent chicken infused with the bright notes of lemon and the
                  aromatic richness of garlic. It's a symphony of flavors that will have your taste
                  buds dancing. Join us as we delve into the art of roasting and uncover the
                  secrets behind creating a masterpiece that's not just a meal but a celebration
                  of culinary craftsmanship.<br /><br />As you preheat your oven, envision the kitchen filling with the tantalizing
                  aroma of herbs and citrus, setting the stage for a delightful meal that
                  transcends the ordinary. The anticipation builds as the chicken roasts to
                  golden perfection, promising a dining experience that marries simplicity with
                  sophistication. Whether you're a seasoned chef or a kitchen novice, this recipe
                  invites you to become a culinary artist, creating a masterpiece that will leave a
                  lasting impression on your guests and loved ones.</p>
                <p className="text-black font-bold text-2xl mt-10">Let’s go over the basics– the do’s, and the<br />
                  don’ts– for How to Cook a chicken</p>
                <p className="text-red-500 font-bold mt-3 text-xl">DO'S:</p>
                <p className="font-bold mt-4 text-xl text-gray-950">Thoroughly Clean Hands and Surfaces: </p>
                <p className="text-gray-700">Before and after handling raw chicken, ensure your hands, utensils, and<br />
                  surfaces are clean to prevent cross-contamination.</p>
                <p className="font-bold mt-4 text-xl text-gray-950">Use Separate Cutting Boards: </p>
                <p className="text-gray-700">Dedicate specific cutting boards for raw chicken to avoid the spread of<br />
                  bacteria to other foods.</p>
                <p className="font-bold mt-4 text-xl text-gray-950">Check Internal Temperature: </p>
                <p className="text-gray-700">Invest in a reliable meat thermometer to ensure the chicken reaches the safe<br />
                  internal temperature of 165°F (74°C).</p>
                <p className="text-red-500 font-bold mt-3 text-xl">DONT'S:</p>
                <p className="font-bold mt-4 text-xl text-gray-950">Thaw Chicken at Room Temperature: </p>
                <p className="text-gray-700">Avoid thawing chicken on the counter. Instead, thaw it in the refrigerator to<br />
                  prevent bacterial growth.</p>
                <p className="font-bold mt-4 text-xl text-gray-950">Overcrowd the Pan:  </p>
                <p className="text-gray-700">When roasting, ensure the chicken pieces have space between them for even<br />
                  cooking. Overcrowding can lead to unevenly cooked chicken</p>
                <p className="text-4xl font-bold mt-10">INSTRUCTIONS</p>
                <p className="mt-10">This recipe goes beyond the basics, inviting you to savor the richness of a<br />
                  creamy tomato basil sauce that clings to each strand of perfectly cooked<br />
                  pasta. It's a celebration of simplicity, where every ingredient plays a crucial role<br />
                  in creating a dish that is as comforting as it is delightful.<br />


                  Allow the chicken to rest for 10 minutes before carving. This brief resting<br />
                  period is essential; it allows the juices to redistribute, ensuring each slice is<br />
                  succulent and bursting with flavor. As you carve into the golden exterior, be<br />
                  prepared for the enticing aroma that fills the air, signaling that your Citrus<br />
                  Infusion Delight is ready to be savored.</p>
                <p className="text-red-500 text-xl">Preheat and Prepare</p>
                <p className="mt-4">.  Preheat your oven to 375°F (190°C)</p>
                <p>. Rinse the chicken inside and out, then pat it dry with paper towels.</p>
                <p className="text-red-500 text-xl">Citrus Infusion</p>
                <p>. Carefully lift the skin of the chicken and rub minced garlic directly onto the
                  meat</p>
                <p>. Place lemon slices under the skin, ensuring they cover as much surface as
                  possible.</p>
                <Image className="mt-10" src={second} alt="second image"></Image>
                <p className="text-red-500 text-xl mt-10">Pairing Suggestions</p>
                <p className="mt-4">1. Side Dish: Serve alongside roasted vegetables or a simple green salad</p>
                <p className="">2. Wine: Pair with a crisp or a for a well-balanced meal.</p>
                <p className="mt-4"><span className="text-red-500 underline">Roasted Vegetables:</span> The vibrant flavors of the roasted chicken complement<br />
                  beautifully with seasonal vegetables.</p>
                <p><span className="text-red-500 underline">Herb infused Quinoa:</span> Create a wholesome meal by serving it alongside a bed<br />
                  of herb-infused quinoa.</p>
                <p className="mt-10">
                  The combination of fresh lemon and aromatic garlic creates a citrus infused<br />
                  masterpiece that takes the classic roast chicken to a whole new level. The<br />
                  acidity of the lemons not only adds brightness but also helps to tenderize the<br />
                  meat, resulting in a juicy and flavorful dish.<br />

                  Whether you're hosting a family dinner or looking for a show stopping<br />
                  centerpiece for a special celebration, this Lemon Garlic Roasted Chicken is the<br />
                  answer. The simplicity of the ingredients allows the natural flavors to shine,<br />
                  making it a versatile and impressive dish.<br />
                </p>
                <div className="flex border border-spacing-2 border-black rounded-full w-32 mt-10 p-3">SHARE</div>
                <p className="mt-10">Isabella Russo</p>
                <p className="text-gray-600 mt-4">In the world of pots and pans, I'm on a mission to turn every meal into a<br />
                  masterpiece. Cooks Delight is not just a blog; it's a shared space where<br />
                  the love for food transcends boundaries. Here, we celebrate the art of<br />
                  crafting meals that not only nourish the body but also feed the soul.</p>
                  <div className="flex border border-spacing-2 border-black rounded-full w-32 mt-4 p-3">LEARN MORE</div>

              </div>
              <div>
                <div className="w-96 h-80 flex-col justify-center items-center bg-white rounded-3xl mt-10 border border-gray-300 p-5 mr-20">
                  <h2 className="text-red-500 text-xl">INGREDIENTS</h2>
                  <div>
                    <ul>
                      <li><span className="text-2xl font-bold"> .</span> 1 whole chicken (about 3 4 poundsi)</li>
                      <li><span className="text-2xl font-bold"> .</span> 2 lemons, slicej</li>
                      <li><span className="text-2xl font-bold"> .</span> 6 cloves garlic, mincej</li>
                      <li><span className="text-2xl font-bold"> .</span> 2 tablespoons olive oi|</li>
                      <li><span className="text-2xl font-bold"> .</span> 1 teaspoon dried thymx</li>
                      <li><span className="text-2xl font-bold"> .</span> 1 teaspoon dried rosemar</li>
                      <li><span className="text-2xl font-bold"> .</span> Salt and black pepper to taste</li>
                    </ul>
                  </div>
                </div>
                <div className="w-96 h-56 flex-col justify-center items-center bg-white rounded-3xl mt-10 border border-gray-300 p-5 mr-20">
                  <h2 className="text-red-500 text-xl">Equipment Needed for<br />
                    Preparation</h2>
                  <div>
                    <ul>
                      <li><span className="text-2xl font-bold"> .</span> Roasting pan</li>
                      <li><span className="text-2xl font-bold"> .</span> Meat thermometer</li>
                      <li><span className="text-2xl font-bold"> .</span> 6 cloves garlic, mincej</li>
                      <li><span className="text-2xl font-bold"> .</span> Kitchen twine</li>
                    </ul>
                  </div>
                </div>
                <div className="w-96 h-52 flex-col justify-center items-center bg-white rounded-3xl mt-10 border border-gray-300 p-5 mr-20">
                  <h2 className="text-red-500 text-xl">Nutritional Value</h2>
                  <p>Per serving (based on a 4-pound chicken):</p>
                  <div>
                    <ul>
                      <li>Calories: ~250</li>
                      <li>Protein: ~30g</li>
                      <li>Total Fat: ~13g</li>
                      <li>Carbohydrates: ~5g</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </main >
  )
}
