import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons/faCompactDisc";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons/faSkullCrossbones";
import { faSort } from "@fortawesome/free-solid-svg-icons/faSort";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faUsersSlash } from "@fortawesome/free-solid-svg-icons/faUsersSlash";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function registerFaIcons(): void {
  // TODO: deep imports aren't necessary.
  // use normal imports when proper tree shaking is added
  library.add(
    faHeart,
    faMinus,
    faPlus,
    faTimes,
    faUserAstronaut,
    faEdit,
    faCompactDisc,
    faMap,
    faEllipsisH,
    faSort,
    faUsers,
    faUsersSlash,
    faArrowRight,
    faArrowLeft,
    faSkullCrossbones
  );
}
