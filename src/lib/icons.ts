import {
    Brain, Eye, Sparkles, Users, Leaf, Wifi, Layers, BarChart,
    Microscope, GraduationCap, Database, Calendar, ShoppingBag,
    CreditCard, Shield, Heart, Cpu, Factory
} from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Brain, Eye, Sparkles, Users, Leaf, Wifi, Layers, BarChart,
    Microscope, GraduationCap, Database, Calendar, ShoppingBag,
    CreditCard, Shield, Heart, Cpu, Factory
};

export function getIcon(name: string) {
    return iconMap[name] || Sparkles;
}
