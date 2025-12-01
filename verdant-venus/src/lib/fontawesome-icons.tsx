/**
 * Font Awesome SVG Icon Components
 * 
 * Цей файл містить мапінг lucide-react іконок на Font Awesome SVG компоненти.
 * Для використання Font Awesome Pro, завантажте SVG файли з fontawesome.com
 * та замініть відповідні компоненти.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Для Font Awesome Pro, замініть цей імпорт на:
// import { ... } from '@fortawesome/pro-solid-svg-icons';
// та налаштуйте .npmrc з токеном доступу до Font Awesome Pro реєстру
import {
  faArrowRight,
  faArrowLeft,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faStar,
  faCode,
  faCodeBranch,
  faList,
  faBolt,
  faCloud,
  faComments,
  faCog,
  faLightbulb,
  faListCheck,
  faBook,
  faFile,
  faDownload,
  faEllipsisH as faMoreHorizontal,
  faCheck,
  faCircle,
  faExternalLinkAlt as faArrowUpRight,
  faChartBar,
  faCoins as faBitcoin,
  faBuilding,
  faBuilding as faBuilding2,
  faMicrochip,
  faFilm,
  faFingerprint,
  faGraduationCap,
  faHeartPulse,
  faLeaf,
  faLock,
  faBars,
  faX,
  faMagic as faSparkles,
  faArrowRight as faMoveRight,
  faBatteryFull as faBatteryCharging,
  faLayerGroup as faLayers,
  faBroadcastTower as faRadioTower,
  faColumns as faSquareKanban,
  faInfinity,
  faComment as faMessageCircle,
  faFont as faText,
  faUpload,
} from '@fortawesome/pro-solid-svg-icons';

type IconProps = {
  className?: string;
  strokeWidth?: number;
  size?: number | string;
  style?: React.CSSProperties & Record<string, string | number | undefined>;
};

// Створюємо обгортку для Font Awesome іконок, щоб вони працювали як lucide-react
const createIcon = (icon: any) => {
  return React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, strokeWidth, size, style, ...props }, ref) => {
      // Font Awesome автоматично використовує розмір з className (size-4, h-4, w-4 тощо)
      // strokeWidth ігнорується для Font Awesome, але залишаємо для сумісності
      // style також ігнорується, оскільки Font Awesome використовує className
      
      return (
        <FontAwesomeIcon
          icon={icon}
          className={className}
          ref={ref}
          {...(props as any)}
        />
      );
    }
  );
};

// Мапінг lucide-react іконок на Font Awesome
export const ArrowRight = createIcon(faArrowRight);
export const ArrowLeft = createIcon(faArrowLeft);
export const ChevronDown = createIcon(faChevronDown);
export const ChevronDownIcon = createIcon(faChevronDown);
export const ChevronRight = createIcon(faChevronRight);
export const ChevronRightIcon = createIcon(faChevronRight);
export const ChevronLeft = createIcon(faChevronLeft);
export const Star = createIcon(faStar);
export const Sparkles = createIcon(faSparkles);
export const Code = createIcon(faCode);
export const GitBranch = createIcon(faCodeBranch);
export const List = createIcon(faList);
export const Bolt = createIcon(faBolt);
export const Cloud = createIcon(faCloud);
export const MessagesSquare = createIcon(faComments);
export const Cog = createIcon(faCog);
export const Lightbulb = createIcon(faLightbulb);
export const ListChecks = createIcon(faListCheck);
export const MoveRight = createIcon(faMoveRight);
export const Book = createIcon(faBook);
export const File = createIcon(faFile);
export const Download = createIcon(faDownload);
export const MoreHorizontal = createIcon(faMoreHorizontal);
export const CheckIcon = createIcon(faCheck);
export const CircleIcon = createIcon(faCircle);
export const ArrowUpRight = createIcon(faArrowUpRight);
export const BarChart = createIcon(faChartBar);
export const Bitcoin = createIcon(faBitcoin);
export const Building = createIcon(faBuilding);
export const Building2 = createIcon(faBuilding2);
export const Cpu = createIcon(faMicrochip);
export const Film = createIcon(faFilm);
export const Fingerprint = createIcon(faFingerprint);
export const GraduationCap = createIcon(faGraduationCap);
export const HeartPulse = createIcon(faHeartPulse);
export const Leaf = createIcon(faLeaf);
export const Lock = createIcon(faLock);
export const Menu = createIcon(faBars);
export const X = createIcon(faX);
export const BatteryCharging = createIcon(faBatteryCharging);
export const GitPullRequest = createIcon(faCodeBranch);
export const Layers = createIcon(faLayers);
export const RadioTower = createIcon(faRadioTower);
export const SquareKanban = createIcon(faSquareKanban);
export const WandSparkles = createIcon(faSparkles);
export const Infinity = createIcon(faInfinity);
export const MessageCircle = createIcon(faMessageCircle);
export const Text = createIcon(faText);
export const Upload = createIcon(faUpload);

