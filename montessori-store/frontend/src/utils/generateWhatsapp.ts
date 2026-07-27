import { CartItem } from "@/store/cartStore";

export function generateWhatsapp(cart: CartItem[]) {

    let message = "Hola GABLIAM STUDIO,%0A%0A";

    message += "Quisiera cotizar:%0A%0A";

    cart.forEach(item => {

        message += `• ${item.name} x${item.quantity}%0A`;

    });

    return `https://wa.me/51981506693?text=${message}`;

}
