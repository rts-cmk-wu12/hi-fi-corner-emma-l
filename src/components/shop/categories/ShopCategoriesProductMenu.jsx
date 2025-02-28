import { useParams } from 'react-router';
import './ShopCategoriesProductMenu.scss';

export default function ShopCategoriesProductMenu({ amplifiersData, categoriesData }) {

    const params = useParams();
    const currentCategory = params.category;
    const allCategories = categoriesData.categories;
    const allAmplifiers = amplifiersData;
    console.log(amplifiersData);
    console.log(categoriesData)

    return (
        <ul>
{/*             {data && allCategories?.map(category => {
                return (
                    <li key={category[1]?.map(subCategory => {
                        subCategory?.map(cat => cat.id);
                        return cat.id;
                        }) || category[1]?.map(cat => cat.id)}>
                        <button>{category}</button>
                    </li>
                )
            })} */}
        </ul>
    )
}